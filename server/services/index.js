const catalogue = require("../data/phones.json");
//utils:
const checkParams = require("../utils/checkparams");

module.exports = {
  async getAllPhones() {
    return catalogue;
  }
};
