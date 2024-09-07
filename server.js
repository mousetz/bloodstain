const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('.')); // serve files from current directory

let username = 'bloodstain'; // default username

app.post('/update-username', (req, res) => {
  username = req.body.username;
  res.json({ message: 'Username updated successfully!' });
});

app.get('/username', (req, res) => {
  res.json({ username: username });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // serve index.html
});

app.get('/update-username', (req, res) => {
  res.sendFile(__dirname + '/update-username.html'); // serve update-username.html
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});