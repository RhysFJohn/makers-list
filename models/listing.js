const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: {type: String, required: true},
  creator_fname: {
    type: String, 
    ref: 'user'
  },
  creator_lname: {
    type: String,
    ref: 'user'
  },
  telephone: {
    type: String,
    required: true
  }
}, { timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at'}
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;