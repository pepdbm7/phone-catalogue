const express = require("express");
const router = express.Router();

//utils:
const services = require("../services");
const routeErrorHandler = require("./route-error-handler");

router.get("/", (req, res) => {
  res = "<p>hello from express!</p>";
});

router.get("/catalogue", (req, res) => {
  routeErrorHandler(() => {
    return services.getAllPhones().then(phones => {
      res.status(240).send(phones);
    }, res);
  });
});

//response on any different route:
router.get("*", function(req, res) {
  res.send("Not Found", 404);
});

module.exports = router;
