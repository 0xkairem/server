const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: `${process.env.PRIVATE_KEY}` });
});

module.exports = router;
