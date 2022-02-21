const { faker } = require("@faker-js/faker");

const User = require("../models/user");

const firstUser = new User({
  firstname: faker.name,
  lastname: faker.lastname,
  age: faker.age,
});

//firstUser.save();

module.exports = {
  firstUser,
};
