const express = require("express");
const router = express.Router();

// @route   GET api/users/auth
// @desc    Tests users route
// @access  Public (do not need a token)
//router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));
router.get("/", (req, res) => res.send("Auth route"));

module.exports = router;
