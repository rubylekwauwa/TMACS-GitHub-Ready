module.exports = async function (context, req) {
    const casLoginUrl =
        process.env.CAS_LOGIN_URL ||
        "https://secure.its.yale.edu/cas/login";

    // Uses the SITE_URL environment variable that you set in Azure
    const siteUrl =
        (process.env.SITE_URL || "https://tmacsmentornetwork.yale.edu").replace(/\/$/, "");

    // IMPORTANT: Azure Functions live under /api/
    const service = encodeURIComponent(`${siteUrl}/api/cas-callback`);

    context.res = {
        status: 302,
        headers: {
            Location: `${casLoginUrl}?service=${service}`
        },
        body: ""
    };
};
