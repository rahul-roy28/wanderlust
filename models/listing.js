const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://www.istockphoto.com/photo/the-wolf-within-gm182773297-12725226",
    set: (v) =>
      v === ""
        ? "https://www.istockphoto.com/photo/the-wolf-within-gm182773297-12725226"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
