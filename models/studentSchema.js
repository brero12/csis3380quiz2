// import mongoose
const mongoose = require("mongoose");

// create Schema Class
const Schema = mongoose.Schema;

// create Schema Object (bookSchema)
const studentSchema = new Schema({
  name: { type: String, required: true },
  sid: { type: String, required: true },  
});

const examrecords = mongoose.model("examrecords", studentSchema);
module.exports = examrecords;