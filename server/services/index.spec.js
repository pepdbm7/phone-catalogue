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

        expect(err.message).to.equal("Contacts not found");
      }
    });

    describe("retrieve a phone by ID", () => {
      it("should succeed on retrieving a phone by its ID ", async () => {
        try {
          await services.getPhone();
        } catch (err) {
          expect(err).to.be.instanceof(NotFoundError);

          expect(err.message).to.equal("Contact not found");
        }
      });
    });
  });
});
