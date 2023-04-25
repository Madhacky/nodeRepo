const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
require("dotenv").config();

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const routes = require("./routes/routes");
app.use("/api", routes);
