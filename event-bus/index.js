const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')

const app = express();
app.use(bodyParser.json());

// Event store
const events = [];

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  console.log('Echoing Events...')

  console.log('Sending event to Post Service');
  axios.post('http://localhost:4000/events', event);

  console.log('Sending event to Comments Service');
  axios.post('http://localhost:4001/events', event);

  console.log('Sending event to Query Service');
  axios.post('http://localhost:4002/events', event);

  console.log('Sending event to Moderation Service');
  axios.post('http://localhost:4003/events', event);

  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => console.log('Listening on 4005'));
