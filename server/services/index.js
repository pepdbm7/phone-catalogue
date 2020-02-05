const catalogue = require("../data/phones.json");

module.exports = {
  async getAllPhones() {
    return catalogue;
  }
};
