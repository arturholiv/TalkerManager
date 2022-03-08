const errorHandler = require('./errorHandler');
const passwordValidation = require('./passwordValidation');
const emailValidation = require('./emailValidation');
const tokenValidation = require('./tokenValidation');
const nameValidation = require('./nameValidation');
const ageValidation = require('./ageValidation');
const talkValidation = require('./talkValidation');


module.exports = {
  errorHandler,
  passwordValidation,
  emailValidation,
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
}