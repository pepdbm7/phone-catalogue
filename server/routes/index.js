const express = require("express");
const router = express.Router();

//utils:
const services = require("../services");

router.get("/catalogue", (req, res) => {
  return (
    services
      .getAllPhones()
      .then(phones => {
        res.status(200).send(phones);
      }, res)
      .catch(err) > res.json({ error: err.message })
  );
});

//response on any different route:
router.get("*", function(req, res) {
  res.status(404).send("Not Found");
});

module.exports = router;
