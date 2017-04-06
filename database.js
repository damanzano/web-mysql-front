/**
 * New node file
 */
var mysql = require('mysql');
var pool = null;

exports.conectar = function(done){
	pool = mysql.createPool({
		host:'ip del servidor de bd',
		user:'usuario de bd',
		password:'password del usuario',
		database:'bd a la que me conecto'
	});
	
	done(false);
}

exports.getConexion = function(){
	return pool;
}
