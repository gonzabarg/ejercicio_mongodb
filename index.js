const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const router = require("./routes");

const port = 8000;

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/db-ejercicio-6");

// mongoose.connection
//   .once("open", () => console.log("Conexión establecida"))
//   .on("error", (error) => console.log(error));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

app.listen(port);
