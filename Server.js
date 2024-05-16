const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const port = 3005;
const cors = require("cors");
const formRoute = require("./Router/routes");
app.use(express.json());

app.use(
  cors({
    origin: "https://formtask-forntend.vercel.app",
    credentials:true
    
  })
);
app.listen(port, (req, res) => {
  console.log("App listening");
});

app.use("/api", formRoute);
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then((res) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
