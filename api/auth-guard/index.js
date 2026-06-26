const fs = require("fs");
const path = require("path");
const { getSession, escapeHtml } = require("../shared/cas-common");

function readIndexHtml() {
  const candidates = [
    path.join(__dirname, "../shared/index.html"),
    path.join(process.cwd(), "../index.html"),
    path.join(process.cwd(), "index.html"),
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return fs.readFileSync(candidate, "utf8");
  }
  throw new Error(`Could not find index.html. Tried: ${candidates.join(", ")}`);
}

function injectAuthControls(html, username) {
  const authBar = `
<div class="cas-auth-bar" role="status" aria-label="Yale CAS login status">
  <span>Yale CAS: signed in as ${escapeHtml(username)}</span>
  <a href="/cas-logout">Log out</a>
</div>`;
  const authCss = `<style>
.cas-auth-bar{position:fixed;right:1rem;bottom:1rem;z-index:9999;background:#00356b;color:#fff;border-radius:999px;padding:.55rem .8rem;font:13px/1.2 system-ui,-apple-system,Segoe UI,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.18)}
.cas-auth-bar a{color:#fff;text-decoration:underline;margin-left:.75rem;font-weight:700}
@media print{.cas-auth-bar{display:none}}
</style>`;
  return html.replace("</head>", `${authCss}\n</head>`).replace("<body>", `<body>\n${authBar}`);
}

module.exports = async function (context, req) {
  const session = getSession(req);
  if (!session) {
    context.res = {
      status: 302,
      headers: { Location: "/cas-login" },
      body: "Redirecting to Yale CAS...",
    };
    return;
  }

  try {
    const html = injectAuthControls(readIndexHtml(), session.user);
    context.res = {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
      body: html,
    };
  } catch (error) {
    context.res = {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
      body: error.message,
    };
  }
};
