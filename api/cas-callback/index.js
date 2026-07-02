const https = require("https");
const { CAS_VALIDATE_URL, getServiceUrl, createToken, sessionCookie, escapeHtml } = require("../shared/cas-common");

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

function parseCasUser(xml) {
  const success = xml.includes("<cas:authenticationSuccess>") || xml.includes("<authenticationSuccess>");
  if (!success) return null;
  const match = xml.match(/<(?:cas:)?user>([^<]+)<\/(?:cas:)?user>/);
  return match ? match[1] : null;
}

module.exports = async function (context, req) {
  const ticket = req.query && req.query.ticket;
  if (!ticket) {
    context.res = { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" }, body: "No CAS ticket found." };
    return;
  }

  const service = getServiceUrl(req);
  const validationUrl = `${CAS_VALIDATE_URL}?service=${encodeURIComponent(service)}&ticket=${encodeURIComponent(ticket)}`;

  try {
    const casXml = await fetchText(validationUrl);
    const username = parseCasUser(casXml);

    if (!username) {
      context.res = {
        status: 401,
        headers: { "Content-Type": "text/html; charset=utf-8" },
        body: `<h1>CAS Authentication Failed</h1><p>Yale CAS did not validate this login ticket.</p><p><a href="/api/cas-login">Try again</a></p>`,
      };
      return;
    }

    const token = createToken(username);
    context.res = {
      status: 302,
      headers: {
        Location: "/",
        "Set-Cookie": sessionCookie(token),
      },
      body: `Authenticated as ${escapeHtml(username)}. Redirecting...`,
    };
  } catch (error) {
    context.res = {
      status: 500,
      headers: { "Content-Type": "text/html; charset=utf-8" },
      body: `<h1>CAS Validation Error</h1><p>${escapeHtml(error.message)}</p>`,
    };
  }
};
