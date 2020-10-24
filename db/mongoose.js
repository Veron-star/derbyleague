const mongoose = require('mongoose');


function connectDb(){

    const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/derby";
    mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useFindAndModify: false
    }).catch(err => {
      console.log(Error, err.message);
    }).then(() => console.log(`DB connected - ${mongoUri}`))
}

module.exports = connectDb;