/**
 * New node file
 */
var express = require('express');
var bodyParser = require('body-parser');
var photoControl = require('../controllers/photo-controller');
var fs = require('fs');

exports.getRoutes = function (){
	var photoRouter = express.Router();
	photoRouter.use(bodyParser.json());
	photoRouter.use(bodyParser.urlencoded({extended:false}));
	
	var ruta = photoRouter.route('/');
	ruta.get(function(req,res, next){
		// Consultar la bd
		
		// Resoponder con los resultados
		photoControl.obtenerTodas(function(err,photos){
			if(err){
				res.status(500);
				res.end();
			}else{
				console.log("Fotos que llegaron");
				console.log(photos);
				res.json(photos);
				
			}
		});
	});
	
	ruta.post(function(req, res, next){
		//  Insert en la bd
		var autor = req.body.author;
		var lugar = req.body.place;
		
		console.log(req.file);
		console.log(req.file.originalname);
		console.log(req.file.filename);
		console.log(req.file.path);
		console.log(req.file.mimetype);
		console.log(req.file.size);
		
		var destino = './public/user-images/'+req.file.filename;
		fs.rename(req.file.path, destino, function(err){
			if(err){
				console.log(err);
			}else{
				photoControl.create(autor, lugar, destino, function(err, id){
					if(err){
						res.status(500);
						res.end();
					}else{
						res.json(id);
					}
				});
			}
		});
		
		
		// responder con el rsultado
	});
	
	var ruta2 = photoRouter.route('/:idPhoto');
	ruta2.get(function(req,res,next){
		// Consultar la imagen con id idPhoto
		// responder con el resultado
	});
	
	return photoRouter;
}
