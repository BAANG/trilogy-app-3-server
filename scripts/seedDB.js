const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/trilogyapp",
  { useNewUrlParser: true });

const userSeed = {
  user: "Chris C",
  os: "Windows",
  timeLog: {
    "linkedin.com": 5,
    "facebook.com": 3,
    "reddit.com": 30
  }
}

db.User
  .remove({})
  .then(() => db.User.collection.insert(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
