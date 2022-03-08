const validator = require('password-validator');

module.exports = (req, res, next) => {
  try {
    const {password} = req.body;

    if (!password) return res.status(400).json({  message: "O campo \"password\" é obrigatório"});
    if(!validator.validate(password)) return res.status(400).json({ message: "O \"password\" deve ter o formato \"password@password.com\""});

    return next();
  } catch (error) {
    return next(e);
  }
};