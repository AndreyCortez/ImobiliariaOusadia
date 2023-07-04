const express = require('express');
const cors = require('cors');
const http = require('http');
const connectDB = require('./db/db.config');

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json()); // Parse JSON data

//import routes
const houseRouter = require('./routers/houseRouter');
const userRouter = require('./routers/userRouter');
const transactionRouter = require('./routers/transactionRouter');
const soldHouseRouter = require('./routers/soldHouseRouter');
const authRouter = require('./routers/authRouter');

app.use(cors());

app.get('/', (req, res) => {
  res.send('rota básica');
});

//using routes
app.use('/houses', houseRouter);
app.use('/users', userRouter);
app.use('/transaction', transactionRouter);
app.use('/soldhouse', soldHouseRouter);
app.use('/auth', authRouter);


const port = 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

