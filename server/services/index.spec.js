// to test: ..\back> mocha services/index.spec.js

const services = require("./index.js");

import { NotFoundError } from "../errors";

import { expect } from "chai";

describe("services", () => {
  describe("retrieve all phones", () => {
    it("should succeed on retrieving all phones ", async () => {
      try {
        await services.getAllPhones();
      } catch (err) {
        expect(err).to.be.instanceof(NotFoundError);

        expect(err.message).to.equal("Phones not found");
      }
    });
  });
});
