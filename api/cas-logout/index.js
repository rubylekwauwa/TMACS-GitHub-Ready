const { CAS_LOGOUT_URL, getBaseUrl, clearSessionCookie } = require("../shared/cas-common");

module.exports = async function (context, req) {
  const returnUrl = `${getBaseUrl(req)}/`;
  context.res = {
    status: 302,
    headers: {
      "Set-Cookie": clearSessionCookie(),
      Location: `${CAS_LOGOUT_URL}?service=${encodeURIComponent(returnUrl)}`,
    },
    body: "Logging out...",
  };
};
