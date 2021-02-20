const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let posts = {};

const handleEvents = (type, data) => {  
  if(type === 'PostCreated') {
    const { id, title } = data;
    
    posts[id] = { id, title, comments: [] };
  }

  if(type === 'CommentCreated') {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    post.comments.push({ id, content, status });
  }

  if(type === 'CommentUpdated') {
    const { id, content, postId, status } = data;

    const post = posts[postId];

    const comment = post.comments.find(comment => {
      return comment.id === id;
    });

    // Update the status or if content is updated in future!!!
    comment.status = status;
    comment.contend = content;
  }
}

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  handleEvents(type, data);

  res.send({});
});

app.listen(4002, async () => {
  console.log('Listening on 4002');

  // Once the Query service is up, we request event store!
  const res = await axios.get('http://localhost:4005/events');

  for (let event of res.data) {
    console.log('Processing event:', event.type);

    handleEvents(event.type, event.data);
  }
});
