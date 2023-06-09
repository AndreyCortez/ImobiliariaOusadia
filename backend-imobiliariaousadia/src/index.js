const express = require('express');
const cors = require('cors');
const http = require('http');
const connectDB = require('./db/db.config');
const path = require('path');


// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json()); // Parse JSON data

// Serve the upload directory as static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/uploads', express.static('.'));

//import routes
const houseRouter = require('./routers/houseRouter');
const userRouter = require('./routers/userRouter');
const offerRouter = require('./routers/offerRouter');
const soldHouseRouter = require('./routers/soldHouseRouter');
const authRouter = require('./routers/authRouter');

app.use(cors());

app.get('/', (req, res) => {
  res.send('rota básica');
});

//using routes
app.use('/houses', houseRouter);
app.use('/users', userRouter);
app.use('/offer', offerRouter);
app.use('/soldhouse', soldHouseRouter);
app.use('/auth', authRouter);


const port = 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

