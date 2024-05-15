const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  name: {
    type: String,
  },
  subject: {
    type: String,
  },
  university: {
    type: String,
  },
  dob: { type: String },
  rating: { type: Number },
});

const schema = mongoose.model("form", formSchema);

module.exports = schema;
