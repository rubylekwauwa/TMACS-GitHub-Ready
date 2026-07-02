module.exports = async function (context, req) {
  const user = req.body || { claims: [] };
  const roles = [];

  const roleClaims = user.claims.filter((claim) => claim.typ === 'roles');
  roleClaims.forEach((claim) => roles.push(claim.val));

  context.res.json({ roles });
};
