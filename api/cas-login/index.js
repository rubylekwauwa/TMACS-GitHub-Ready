module.exports = async function (context, req) {
  const casLoginUrl = process.env.CAS_LOGIN_URL || "https://secure.its.yale.edu/cas/login";
  const siteUrl = (process.env.SITE_URL || "https://tmacsmentornetwork.yale.edu").replace(/\/$/, "");
  const service = encodeURIComponent(`${siteUrl}/api/cas-callback`);

  context.res = {
    status: 302,
    headers: {
      Location: `${casLoginUrl}?service=${service}`
    },
    body: ""
  };
};
