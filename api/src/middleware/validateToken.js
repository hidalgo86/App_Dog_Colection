const jwt = require("jsonwebtoken");
require("dotenv").config();

function validateToken(req, res, next) {

  const accessToken = req.headers.token;
  
  console.log(accessToken)

  if (!accessToken) res.send("Access denied");
  jwt.verify(accessToken, process.env.SECRET, (err, user) => {
    if (err) {
      res.send("access denied, token expered or incorrect");
    } else {
      next();
    }
  });
}

module.exports = validateToken;
