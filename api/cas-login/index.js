module.exports = async function (context, req) {
  const casLoginUrl = process.env.CAS_LOGIN_URL || "https://secure.its.yale.edu/cas/login";
  const siteUrl = process.env.SITE_URL || "https://polite-plant-0f695530f.7.azurestaticapps.net";
  const service = encodeURIComponent(`${siteUrl}/cas-callback`);

  context.res = {
    status: 302,
    headers: {
      Location: `${casLoginUrl}?service=${service}`
    },
    body: ""
  };
};
