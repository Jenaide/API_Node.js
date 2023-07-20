require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/errorMiddleWare')

const cors = require('cors')
const app = express();

// Variables
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND

var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  throw new Error('fake error')
  res.send('Hello Node api')
})

app.use(errorMiddleware);

// Connect to the database
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Connected to database')
    app.listen(PORT, () => console.log(`The server is listening on ${PORT}`));
  }).catch((err) => {
    console.log('Error connecting to database')
  });