const mongoose = require("mongoose");

require("../mongodb_helper");
const Listing = require("../../models/listing");

describe("Listing model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.listings.drop(() => {
      done();
    });
  });

  it("has a title", () => {
    const listing = new Listing({
    title: "Seeking a horse",
    telephone: "07953786125"
    });
    expect(listing.title).toEqual("Seeking a horse")
  });
  
  it("has a telephone number", () => {
    const listing = new Listing({
      title: "Seeking a horse",
      telephone: "07953786125"
      });
    expect(listing.telephone).toEqual("07953786125")
  });
})