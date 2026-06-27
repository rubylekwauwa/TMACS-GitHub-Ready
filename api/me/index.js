const { getSession } = require("../shared/cas-common");

module.exports = async function (context, req) {
  const session = getSession(req);

  if (!session) {
    context.res = {
      status: 401,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ authenticated: false })
    };
    return;
  }

  context.res = {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      authenticated: true,
      user: session.user
    })
  };
};
