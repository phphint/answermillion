// waitingListModel.js
const mongoose = require('mongoose');

// Define the schema for the waiting list
const waitingListSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address']
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically sets to the current date and time
  }
  // You can add more fields here if needed
});

// Create and export the model
const WaitingList = mongoose.model('WaitingList', waitingListSchema);
module.exports = WaitingList;
