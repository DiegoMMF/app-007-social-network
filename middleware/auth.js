const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("auth-token");
  const decoded = jwt.verify(token, process.env.JWTSECRET);
  req.user = decoded.user;
  next();
};
