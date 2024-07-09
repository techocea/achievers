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

// CORS Configuration
const corsOptions = {
  origin: "https://achievers-client.vercel.app",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options("*", cors(corsOptions));

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
