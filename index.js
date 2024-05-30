const express = require("express");
const urlRouter = require("./routes/url");
const connectToMongoDb = require("./connect");
const URL = require("./models/url");

const app = express();
const PORT = 8001;

connectToMongoDb("mongodb://localhost:27017/urlShortner");
app.use(express.json());
app.use("/url", urlRouter);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  if (entry) {
    res.redirect(entry.redirectUrl);
  } else {
    res.status(404).json({ error: "URL not found" });
  }
});

app.listen(PORT, () =>
  console.log(`server created at http://localhost:${PORT}`)
);
