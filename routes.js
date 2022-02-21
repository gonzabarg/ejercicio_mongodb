const express = require("express");

const router = express.Router();

const userController = require("./userController");

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

//------------------RUTAS--------------------//

router.get("/usuarios", userController.show);

router.get("/usuarios/crear", (req, res) => {
  console.log("Alguien quiere crear un usuario");

  const newUser = req.query.params;

  console.log(newUser);

  res.render("crear");
});

router.get("/usuarios/editar/:id", (req, res) => {
  console.log("Alguien quiere editar un usuario");

  const queryId = req.params.id;

  console.log(queryId);

  res.render("editar", { queryId });
});

router.post("/usuarios/crear", userController.create);

router.post("/usuarios/editar/:id");

router.get("/usuarios/eliminar/:id");

module.exports = router;
