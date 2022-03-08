const validator = require('email-validator');
const req = require('express/lib/request');

module.exports = (req, res, next) => {
  try {
    const {email} = req.body;

    if (!email) return res.status(400).json({  message: "O campo \"email\" é obrigatório"});
    if(!validator.validate(email)) return res.status(400).json({ message: "O \"email\" deve ter o formato \"email@email.com\""});

    return next();
  } catch (error) {
    return next(e);
  }
}