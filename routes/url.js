const {
  handleGenerateShortUrl,
  handleGetAnalytics,
} = require("../controllers/url");

const router = require("express").Router();

router.post("/", handleGenerateShortUrl);
router.get("/analytics/:shortId", handleGetAnalytics);
module.exports = router;
