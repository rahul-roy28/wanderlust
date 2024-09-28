const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

const revieController = require("../contollers/reviews.js");

// Post Review Route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(revieController.createReview)
);

// Delete Review Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(revieController.destroyReview)
);

module.exports = router;
