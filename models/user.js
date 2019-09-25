const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  user: { type: String, required: true },
  os: { type: String },
  timeLog: { type: String }
})

const User = mongoose.model("User", userSchema)

module.exports = User