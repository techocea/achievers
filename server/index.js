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

//cors middleware
const corsOptions = {
  origin: 'https://negombosmartachievers.lk', 
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type,Authorization',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// Connect to the database
connectToDB();

// Import routes
app.use("/api", formRoutes);

app.get("/", (req, res) => {
  res.send("Hello Negombo Smart Achievers");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
