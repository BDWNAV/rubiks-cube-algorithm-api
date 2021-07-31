const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  return res.status(404).json({
    statusCode: 404,
    success: false,
    error: "Route was not found please provide a valid route."
  });
});

module.exports = router;