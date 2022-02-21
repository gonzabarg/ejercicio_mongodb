const express = require('express');

const router = express.Router();

const userController = require('./userController');

//----------------BASE DE DATOS------------------//

const mysql = require('mysql2');


const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'ha_ejercicio_20'
});

connection.connect(function(err) {
    if (err) throw err;

    console.log('Conectado');
});



//------------------RUTAS--------------------//

router.get('/usuarios', userController.show);

router.get('/usuarios/crear', (req, res) => {

    console.log('Alguien quiere crear un usuario')

    const newUser = req.query.params;

    console.log(newUser);

    res.render('crear');
});


router.get('/usuarios/editar/:id', (req, res) => {

    
    console.log('Alguien quiere editar un usuario');

    res.render('editar');
});

router.post('/usuarios', (req, res) => {

    console.log('Post usuarios');

    res.send('Post usuarios');
});

router.post('/usuarios/editar/:id', (req, res) => {

    console.log('Post editar usuario');

    res.send('Post editar usuario');
});

router.get('/usuarios/eliminar/:id', userController.delete);




module.exports = router;