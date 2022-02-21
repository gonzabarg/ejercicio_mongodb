const mongoose = require("mongoose");
const userSchema = require("../schemas/user");

const User = mongoose.model("User", userSchema);

// const user = new User({
//   firstname: "Renato",
//   lastname: "Della Paolera",
//   age: 40,
// });

// async function newUser() {
//   try {
//     const savedUser = await user.save();
//     console.log(savedUser);
//   } catch (error) {
//     console.log(error);
//   }
// }

module.exports = User;
