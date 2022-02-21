//----------------BASE DE DATOS------------------//

// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "ha_ejercicio_20",
// });

// connection.connect(function (err) {
//   if (err) throw err;

//   console.log("Conectado");
// });

const User = require("./models/user");
const { firstUser } = require("./seeders/userSeeder");

module.exports = {
  show: async function (req, res) {
    firstUser;
    const users = await User.find();
    console.log(users);
    res.render("usuarios", { users });
  },

  create: async function (req, res) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const age = req.body.age;

    const user = new User({
      firstname: firstname,
      lastname: lastname,
      age: age,
    });

    try {
      const savedUser = await user.save();
      console.log(savedUser);
      res.redirect("/usuarios");
    } catch (error) {
      console.log(error);
    }

    // connection.query(
    //   `INSERT INTO users (firstname, lastname, age) VALUES ("${firstname}", "${lastname}", "${age}")`,
    //   function (err, users) {
    //     if (err) throw err;
    //     console.log(users);

    //     res.redirect("/usuarios");
    //   }
    // );
  },
};
