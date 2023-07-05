const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spellSchema = new Schema({
  name: String,
  description: String,
  type: String,
  value : {
    min: Number,
    max: Number,
    unit: String
  },
  range : {
    min: Number,
    max: Number,
  }
});

const Spell = mongoose.model("Spell", spellSchema);
module.exports = Spell;

