

// models/Survey.js
const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    // ... your existing schema fields
    country: String,
    amount: Number,
    firstTime: Boolean, // Assuming a conversion from 'yes'/'no' to true/false
    usedApps: [String], // Array of strings for the checkboxes
    shoppingReason: String, // Single string, not an array
    telephone: String,
    dob: Date,
    name: String,
    gender: String,
    email: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    // zipCode: String, // Uncomment this line if you add a zipCode field to your form
});

module.exports = mongoose.model('Survey', surveySchema);
