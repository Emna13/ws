const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
require("dotenv").config({ path: "./config/.env" });
app.use(express.json());
connectDB();
const User = require("./models/User");

//****************************************************//

app.get("/api/users", (req, res) => {
  User.find()
    .then((users) => res.send(users))
    .catch((err) => res.send(err));
});

app.post("/api/add_user", (req, res) => {
  const { name, lastName, email, phone } = req.body;
  const newUser = new User({ name, lastName, email, phone });
  newUser
    .save()
    .then((user) => res.send(user))
    .catch((err) => res.send(err));
});

app.put("/api/users/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body,{new:true})
    .then((user) => res.send(user))
    .catch((err) => res.send(err));
});

app.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then((user) => res.send(user))
    .catch((err) => res.send(err));
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
