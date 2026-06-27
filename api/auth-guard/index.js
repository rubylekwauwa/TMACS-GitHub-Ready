module.exports = async function (context, req) {
  context.res = {
    status: 302,
    headers: {
      Location: "/index.html"
    },
    body: "Redirecting to T-MACS..."
  };
};
