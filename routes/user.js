const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const usercontroller = require("../contollers/users.js");

// For SignUp
router
  .route("/signUp")
  .get(usercontroller.renderSignupForm)
  .post(wrapAsync(usercontroller.signup));

// For Login
router
  .route("/login")
  .get(usercontroller.renderLoginform)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    usercontroller.login
  );

// for logOut
router.get("/logout", usercontroller.logout);

module.exports = router;
