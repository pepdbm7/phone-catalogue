const express = require("express");
const router = express.Router();

//utils:
const services = require("../services");
const routeErrorHandler = require("./route-error-handler");

router.get("/catalogue", (req, res) => {
  routeErrorHandler(() => {
    return services.getAllPhones().then(phones => {
      res.status(200).send(phones);
    }, res);
  });
});

//response on any different route:
router.get("*", function(req, res) {
  res.status(404).send("Not Found");
});

module.exports = router;
