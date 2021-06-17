const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello from the server side', app: 'Unicorn' });
});

app.post('/', (req, res) => {
  res.status(200).json({ message: 'You are ALLOWED to post.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('App running at ', PORT);
});
