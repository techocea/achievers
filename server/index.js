const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const connectToDB = require("./db/connectToDB");
const formRoutes = require("./routes/formRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//connect to the database
connectToDB();

//import routes

app.use("/api", formRoutes);

app.get("/", (req, res) => {
  res.send("Hello Negombo Smart Achievers");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
