const catalogue = require("../data/phones.json");
//utils:
const checkParams = require("../utils/checkparams");

module.exports = {
  getAllPhones() {
    debugger;
    return json.parse(catalogue);
  },

  getPhoneById(id) {
    debugger;
    checkParams([{ key: "id", value: id, type: String }]);
    const phone = catalogue.find(phone => phone.id === id);
    return phone;
  }
};
