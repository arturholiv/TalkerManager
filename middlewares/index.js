const errorHandler = require('./errorHandler');
const passwordValidation = require('./passwordValidation');
const emailValidation = require('./emailValidation');
const tokenValidation = require('./tokenValidation');
const nameValidation = require('./nameValidation');
const ageValidation = require('./ageValidation');
const talkValidation = require('./talkValidation');
const dateValidation = require('./dateValidation');
const rateValidation = require('./rateValidation');


module.exports = {
  errorHandler,
  passwordValidation,
  emailValidation,
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  dateValidation,
  rateValidation
}