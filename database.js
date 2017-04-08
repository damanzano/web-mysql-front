/**
 * New node file
 */
var mysql = require('mysql');
var pool = null;

exports.conectar = function(done){
	pool = mysql.createPool({
		host:'programacion-web-test.cejfwltsp021.sa-east-1.rds.amazonaws.com',
		user:'damanzano',
		password:'4TohsakaRin',
		database:'aplicacion_social'
	});
	
	done(false);
}

exports.getConexion = function(){
	return pool;
}
