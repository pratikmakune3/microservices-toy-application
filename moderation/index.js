const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
  const { type, data } = req.body;

  // Comment moderation logic, if the comment includes 'black' string, reject the comment!
  if(type === 'CommentCreated') {
    const status = data.content.includes('black') ? 'rejected' : 'approved';

    await axios.post('http://localhost:4005/events', {
      type: 'CommentModerated',
      data: {
        id: data.id,
        postId: data.postId,
        status,
        contend: data.content
      }
    })
  }

  res.send({});
});

app.listen(4003, () => console.log('Listening on 4003'));
