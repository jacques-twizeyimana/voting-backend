const jwt = require('jsonwebtoken');

exports.authenticated = (req, res, next) => {
  try {
    const token = req.headers["authorization"] || req.headers["Authorization"];

    if (!token) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized. No token provided",
      });
    }

    const decoded = jwt.verify(token, "mivote_secret");
    req.user = decoded;
  } catch (err) {
    console.log(err.message);
    return res.status(401).send({
      success: false,
      message: "Token expired. Please login again.",
    });
  }
  return next();
};

exports.isAdmin = (req, res, next) => {
  if (req.user.role !== "ADMIN") {
    return res.status(401).send({
      success: false,
      message: "Unauthorized. You are not an admin.",
    });
  }
  return next();
};
