const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  qualification: { type: String, required: true },
  path: { type: String, required: true },
  destination: { type: String, required: true },
  funds: { type: String, required: true },
});

module.exports = mongoose.model("Form", formSchema);
