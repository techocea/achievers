const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const connectToDB = require("./db/connectToDB");
const formRoutes = require("./routes/formRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific HTTP methods
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
  next();
});

app.get('/', (req, res) => {
  res.send('CORS is enabled for all origins');
});


// Connect to the database
connectToDB();

// Import routes
app.use("/api/vi", formRoutes);

app.get("/", (req, res) => {
  res.send("Hello Negombo Smart Achievers");
});



app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
