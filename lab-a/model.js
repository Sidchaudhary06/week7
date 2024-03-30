const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  targetDate: { type: Date, required: true },
  achieved: { type: Boolean },
});

module.exports = mongoose.model('Inventory', inventorySchema);