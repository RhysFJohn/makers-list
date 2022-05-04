/* eslint-disable quotes */
const mongoose = require("mongoose");

require("../mongodb_helper");
const User = require("../../models/user");

describe("User model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(()=>{
      done();
    });
  });

  it("has a first name", () => {
    const user = new User({
      first_name: "John",
      last_name: "Doe",
      email: "JohnDoe@example.com",
      password: "password",
    });
    expect(user.first_name).toEqual("John")
  });

  it("has a last name", () => {
    const user = new User({
      first_name: "John",
      last_name: "Doe",
      email: "JohnDoe@example.com",
      password: "password",
    });
    expect(user.last_name).toEqual("Doe")
  });

  it("has a email address", () => {
    const user = new User({
      first_name: "John",
      last_name: "Doe",
      email: "JohnDoe@example.com",
      password: "password",
    });
    expect(user.email).toEqual("JohnDoe@example.com")
  });

  it("has a password", () => {
    const user = new User({
      first_name: "John",
      last_name: "Doe",
      email: "JohnDoe@example.com",
      password: "password",
    });
    expect(user.password).toEqual("password")
  });

  it("can list all users", (done) => {
    User.find((err, users) => {
      expect(err).toBeNull();
      expect(users).toEqual([]);
      done();
    });
  });

  it("can save a user", (done) => {
    const user = new User({
      first_name: "John",
      last_name: "Doe",
      email: "JohnDoe@example.com",
      password: "password",
    });

    user.save((err) => {
      expect(err).toBeNull();

      User.find((err, users) => {
        expect(err).toBeNull();

        expect(users[0]).toMatchObject({
          first_name: "John",
          last_name: "Doe",
          email: "JohnDoe@example.com",
          password: "password",
        });
        done();
      });
    });
  });
});