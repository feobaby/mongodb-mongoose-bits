const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/index');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());
app.use(router);

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, 
    { 
     useUnifiedTopology: true, 
     useNewUrlParser: true, 
     useCreateIndex: true,
    })
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(error => {
    console.log('Connection failed!');
    console.log(error);
  });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});