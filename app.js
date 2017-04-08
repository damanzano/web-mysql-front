// Módulos externos
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var multer = require('multer');

// Módulos internos
var db = require('./database');

// Representación del servidor
var app = express();

// configurar el logger
app.use(morgan('dev'));

// configurar la transformación de los datos de entrada
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// configurar la subida de archivos
app.use(multer({dest:'./uploads/'}).single('archivo'));

// configurar los recursos
var photoRouter = require('./routes/photo-router');
app.use('/photos', photoRouter.getRoutes());

//var userRouter = require('./routes/user-router');
//app.use('/userd', userRouter.getRoutes());

// configurar recursos públicos
app.use(express.static(__dirname +'/public'))

// Configuración...

db.conectar(function(err) {
	if (err) {
		console.log('La conexión falló');
		process.exit(1);
	} else {
		var host = 'localhost';
		var port = 3000;

		app.listen(port, host, function() {
			console.log("Servidor corriendo en: http://" 
					+ host + ":" + port+"/");
		});
	}

});
