const router = require("express").Router();

// "/"のリクエストを受けた際に、index.ejsを返す
router.get("/", (req, res) => {
  res.render("./index.ejs")
});

module.exports = router;