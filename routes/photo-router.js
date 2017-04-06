/**
 * New node file
 */
var express = require('express');
var bodyParser = require('body-parser');
var photoControl = require('../controllers/photo-controller');

exports.getRoutes = function (){
	var photoRouter = express.Router();
	photoRouter.use(bodyParser.json());
	photoRouter.use(bodyParser.urlencoded({extended:false}));
	
	var ruta = photoRouter.route('/');
	ruta.get(function(req,res, next){
		// Consultar la bd
		// responder con datos
	});
	
	ruta.post(function(req, res, next){
		//  Insert en la bd
		// responder con el rsultado
	});
	
	var ruta2 = photoRouter.route('/:idPhoto');
	ruta2.get(function(req,res,next){
		// Consultar la imagen con id idPhoto
		// responder con el resultado
	});
	
	return photoRouter;
}
