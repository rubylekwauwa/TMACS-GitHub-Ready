const crypto = require("crypto");

const CAS_LOGIN_URL = process.env.CAS_LOGIN_URL || "https://secure.its.yale.edu/cas/login";
const CAS_VALIDATE_URL = process.env.CAS_VALIDATE_URL || "https://secure.its.yale.edu/cas/serviceValidate";
const CAS_LOGOUT_URL = process.env.CAS_LOGOUT_URL || "https://secure.its.yale.edu/cas/logout";
const COOKIE_NAME = "tmacs_cas_session";
const SESSION_DAYS = 1;

function getHeader(req, name) {
  if (!req || !req.headers) return undefined;
  if (typeof req.headers.get === "function") return req.headers.get(name) || req.headers.get(name.toLowerCase());
  return req.headers[name] || req.headers[name.toLowerCase()];
}

function getBaseUrl(req) {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, "");
  const host = getHeader(req, "host");
  const proto = getHeader(req, "x-forwarded-proto") || "https";
  return `${proto}://${host}`;
}

function getServiceUrl(req) {
  return `${getBaseUrl(req)}/api/cas-callback`;
}

function getSecret() {
  const secret = process.env.CAS_SESSION_SECRET;
  if (!secret) return "CHANGE_ME_SET_CAS_SESSION_SECRET_IN_AZURE";
  return secret;
}

function base64url(input) {
  return Buffer.from(input).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function sign(value) {
  return crypto.createHmac("sha256", getSecret()).update(value).digest("base64url");
}

function createToken(username) {
  const payload = JSON.stringify({ user: username, iat: Date.now() });
  const encoded = base64url(payload);
  return `${encoded}.${sign(encoded)}`;
}

function verifyToken(token) {
  if (!token || !token.includes(".")) return null;
  const [encoded, signature] = token.split(".");
  if (sign(encoded) !== signature) return null;
  try {
    const payload = JSON.parse(Buffer.from(encoded.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf8"));
    const maxAgeMs = SESSION_DAYS * 24 * 60 * 60 * 1000;
    if (!payload.iat || Date.now() - payload.iat > maxAgeMs) return null;
    return payload;
  } catch {
    return null;
  }
}

function parseCookies(cookieHeader = "") {
  return Object.fromEntries(cookieHeader.split(";").map(c => c.trim()).filter(Boolean).map(c => {
    const index = c.indexOf("=");
    if (index < 0) return [decodeURIComponent(c), ""];
    return [decodeURIComponent(c.slice(0, index)), decodeURIComponent(c.slice(index + 1))];
  }));
}

function sessionCookie(token) {
  const maxAge = SESSION_DAYS * 24 * 60 * 60;
  return `${COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`;
}

function clearSessionCookie() {
  return `${COOKIE_NAME}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax`;
}

function getSession(req) {
  const cookies = parseCookies(getHeader(req, "cookie") || "");
  return verifyToken(cookies[COOKIE_NAME]);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>\"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
}

module.exports = {
  CAS_LOGIN_URL,
  CAS_VALIDATE_URL,
  CAS_LOGOUT_URL,
  COOKIE_NAME,
  getBaseUrl,
  getServiceUrl,
  createToken,
  sessionCookie,
  clearSessionCookie,
  getSession,
  escapeHtml,
};