const catalogue = require("../data/phones.json");
//utils:
const checkParams = require("../utils/checkparams");

module.exports = {
  async getAllPhones() {
    return catalogue;
  },

  async getPhoneById(id) {
    checkParams([{ key: "id", value: id, type: String }]);
    const phone = await catalogue.find(phone => phone.id === id);
    return phone;
  }
};
