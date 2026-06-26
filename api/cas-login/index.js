const { CAS_LOGIN_URL, getServiceUrl } = require("../shared/cas-common");

module.exports = async function (context, req) {
  const service = encodeURIComponent(getServiceUrl(req));
  context.res = {
    status: 302,
    headers: { Location: `${CAS_LOGIN_URL}?service=${service}` },
    body: "",
  };
};
