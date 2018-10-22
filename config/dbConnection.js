var mysql = require('mysql');

var connMySQL = function(){
	//console.log('Conexão com o banco de dados estabelecida.');
	return mysql.createConnection({
		host: 'localhost',
		user : 'root',
		password: '12345678',
		database : 'dev'
	});
}

module.exports = function () {
	console.log('Módulo de conexão com o banco de dados carregado.');
	return connMySQL;
}