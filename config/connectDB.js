const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`DB connected`);
    })
    .catch((err) => {
      console.log(err);
    });
}


module.exports = connectDB;
