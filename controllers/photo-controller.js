/**
 * New node file
 */
var db = requiere('../database');

exports.obtenerTodas = function(){
	// consultar todas las fotos
	db.getConexion().query('SELECT * FROM photos', function(err, results){
		if(!err){
			return results;
		}
	});
}

exports.create = function(){
	// crear una nueva foto en la bd
}

exports.obtenerUna = function(idPhoto){
	// Obtener una foto en particular;
}