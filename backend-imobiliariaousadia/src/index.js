const express = require('express');
const cors = require('cors');
const http = require('http');
const connectDB = require('./db/db.config');

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json()); // Parse JSON data

//routes
const houseRouter = require('./routers/houseRouter');

app.use(cors());

app.get('/', (req, res) => {
  res.send('rota básica');
});

// Mount the houseRouter at the desired endpoint
app.use('/houses', houseRouter);

const port = 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

