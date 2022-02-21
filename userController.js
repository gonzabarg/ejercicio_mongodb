//----------------BASE DE DATOS------------------//

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ha_ejercicio_20",
});

connection.connect(function (err) {
  if (err) throw err;

  console.log("Conectado");
});

module.exports = {
  show: (req, res) => {
    connection.query("SELECT * FROM users", function (err, users) {
      if (err) throw err;

      console.log(users);

      res.render("usuarios", { users: users });
    });
  },

  delete: (req, res) => {
    console.log("Eliminar usuario");

    const userID = req.params.id;

    connection.query(
      "DELETE FROM users WHERE id = " + connection.escape(userID),
      function (err, users) {
        if (err) throw err;
        console.log(users);

        res.redirect("/usuarios");
      }
    );
  },

  update: (req, res) => {
    const userId = req.params.id;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const age = req.body.age;

    connection.query(
      `UPDATE users SET firstname = "${firstname}", lastname = "${lastname}", age = ${age} WHERE id = ${connection.escape(
        userId
      )}`,
      function (err, users) {
        if (err) throw err;
        console.log(users);

        res.redirect("/usuarios");
      }
    );
  },

  create: (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const age = req.body.age;

    connection.query(
      `INSERT INTO users (firstname, lastname, age) VALUES ("${firstname}", "${lastname}", "${age}")`,
      function (err, users) {
        if (err) throw err;
        console.log(users);

        res.redirect("/usuarios");
      }
    );
  },
};
