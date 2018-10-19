function NoticiasDAO(connection){
	this._connection = connection; // variaveis com _ é um padrao utilizado para variaveis que deverao ser utilizadas apenas dentro desta classe
}

NoticiasDAO.prototype.getNoticias = function(callback){ //definindo uma propriedade pra funçao NoticiasDAO, sendo esta propriedade outra funçao.
	this._connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.saveNoticia = function(noticia, callback){ //definindo uma propriedade pra funçao NoticiasDAO
	this._connection.query('insert into noticias set ?', noticia, callback);
}

module.exports = function(){
	return NoticiasDAO;
}