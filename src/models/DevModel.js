const mongoose = require("mongoose");
const PointSchema = require("../utils/PointSchema");

const devSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  github_username: { type: String, unique: true },
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: "2dsphere"
  }
});

module.exports = mongoose.model("Dev", devSchema);
