const express = require("express");
const router = express.Router();

//utils:
const services = require("../services");
const routeErrorHandler = require("./route-error-handler");

router.get("/", (req, res) => {
  res = "<p>hello from express!</p>";
});

//Retrieve products to list them in Home:
router.get("/catalogue", (req, res) => {
  routeErrorHandler(() => {
    return services.getAllPhones().then(phones => res.json(phones));
  }, res);
});

//Retrieve user's basket's products to list them in Cart:
router.get("/phone/:id", (req, res) => {
  routeErrorHandler(() => {
    const {
      params: { id }
    } = req;

    return services.getPhoneById(id).then(phone => res.json(phone));
  }, res);
});

//response on any different route:
router.get("*", function(req, res) {
  res.send("Not Found", 404);
});

module.exports = router;
