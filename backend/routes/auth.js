const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/login", (req, res) => {
  User.findOne(req.body.email, req.body.password, (err, data) => {
    if (err) {
      return res.json({ message: "Error" });
    }
    if (data.length > 0) {
      return res.json({ message: "Success" });
    } else {
      return res.json({ message: "Fail" });
    }
  });
});

router.post("/register", (req, res) => {
  User.create(req.body.name, req.body.email, req.body.password, (err, data) => {
    if (err) return res.json({ message: err });
    return res.json({ message: "User created", data });
  });
});

module.exports = router;
