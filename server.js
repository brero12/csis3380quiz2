
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()


const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

 const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true   }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// import routes
const quizCollections = require('./routes/quizCollections');

app.use('/', quizCollections);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});