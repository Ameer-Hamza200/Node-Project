/* eslint-disable no-console */
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = () => {
  return (req, res, next) => {
    console.log("Working");
    // Find Token in Header
    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
      return res.status(401).send("Sorry Token not found");
    }
    // Validation of Token

    const tokenBody = token.slice(7);
    jwt.verify(tokenBody, process.env.JWT_SECRET, (err) => {
      if (err) {
        console.log(`JWT error: ${err}`);
        return res.status(401).send("Acces Denied");
      }
    });

    next();
  };
};
