const express = require("express");
const router = express.Router();

const { login, dashboard } = require("../controllers/main");

const authMiddleware = require("../middleware/auth");

router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/login").post(login);

module.exports = router;

// check username, password in post(login) request
// if exist create new JWT
// send back to front-end
// setup authentication so only the request with JWT can access the dashboard
