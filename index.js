const express = require('express');

const app = express();
app.use(express.json());

const middlewares = require('./middlewares');
const controllers = require('./controllers');

const loginValidationMiddlewares = [
  middlewares.emailValidation,
  middlewares.passwordValidation,
];

const createTalkerValidationMiddlewares = [
  middlewares.tokenValidation,
  middlewares.nameValidation,
  middlewares.ageValidation,
  middlewares.talkValidation,
  middlewares.dateValidation,
  middlewares.rateValidation,
];

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// CREATE
app.post('/login', 
  loginValidationMiddlewares,
  controllers.login);
app.post('/talker',
  createTalkerValidationMiddlewares,
  controllers.createTalker);

// READ
app.get('/talker', controllers.getTalkers);
app.get('/talker/:id', controllers.getTalkerById);

// UPDATE
// DELETE

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use(middlewares.errorHandler);

app.listen(PORT, () => {
  console.log('Online: port 3000');
});
