/**
 * New node file
 */
var db = require('../database');

exports.obtenerTodas = function(callback){
	// consultar todas las fotos
	db.getConexion().query('SELECT * FROM photos', function(err, results){
		if(!err){
			console.log("resultados bd");
			console.log(results);
			callback(false, results);
		}else{
			callback(err);
		}
	});
}

exports.create = function(autor, lugar, ruta, callback ){
	// crear una nueva foto en la bd
	var values = [autor, lugar, ruta, new Date().toISOString()];
	db.getConexion.query('INSERT INTO photos (author, place, photo_path, upload_date) VALUES (?,?,?,?)',
	values,
	function(err, result){
		if(err){
			callback(err);
		}else{
			callback(false, result.insertId);
		}
	}
	);
}

exports.obtenerUna = function(idPhoto){
	// Obtener una foto en particular;
}