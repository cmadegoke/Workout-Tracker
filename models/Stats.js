const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatsSchema = new Schema({

  name: String,
  type: Number
});

const Stats = mongoose.model("Stats", StatsSchema);

module.exports = Stats;