const express = require('express');

const app = express();
app.use(express.json());

const controllers = require('./controllers')

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// CREATE
// READ
app.get('/talker', controllers.getTalkers);
// UPDATE
// DELETE

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online: port 3000');
});
