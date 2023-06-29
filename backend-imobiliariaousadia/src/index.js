const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const port = 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
