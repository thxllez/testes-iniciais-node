module.exports = function(app){ //variavel app é recebida por parametro do app.js
	
	app.get('/noticias', function(req, res){

		var connection = app.config.dbConnection();
		var noticiasDAO = new app.app.models.NoticiasDAO(connection); //new -> realiza uma instancia do módulo

		noticiasDAO.getNoticias(function(error, result){
			res.render('noticias/view_noticias', {noticias : result});
		});

	}); 

	app.get('/noticias/cadastro', function(req, res){

		res.render('noticias/view_cad_noticias');

	});

	app.post('/noticias/salvar', function(req, res){
		var noticia = req.body;

		var connection = app.config.dbConnection();
		var noticiasDAO = new app.app.models.NoticiasDAO(connection);

		noticiasDAO.saveNoticia(noticia, function(error, result){
			res.redirect('/noticias'); // redirecionar 
		});
		//importante que em toda requisiçao post, utilizemos o redirect para não ocorrer o problema do F5
	});
}