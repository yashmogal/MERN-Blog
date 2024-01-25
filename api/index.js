const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.route")

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is Connected");
  })
  .catch((err) => {
    conosle.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000 ");
});

app.use('/api/user',userRoutes);