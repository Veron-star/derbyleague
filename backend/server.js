const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

const auth = require('../routes/auth');
const users = require('../routes/users');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}

app.use('/api/auth', auth);
app.use("/api/users", users); //---mount the new api imported above


app.get("*" , (req,res) => {
  res.sendFile(path.join(__dirname,"../frontend/build/index.html"));   
});

const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017";
    mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useFindAndModify: false
    }).catch(err => {
      console.log(Error, err.message);
    }).then(() => console.log(`DB connected - ${mongoUri}`))


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
