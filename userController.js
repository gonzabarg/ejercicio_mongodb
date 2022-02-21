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
};
