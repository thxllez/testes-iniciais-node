module.exports = function(app){ //variavel app é recebida por parametro do app.js
	
	app.get('/noticias', function(req, res){
		app.app.controllers.c_noticias.noticias(app, req, res);
	}); 

	app.get('/noticias/cadastro', function(req, res){
		app.app.controllers.c_noticias.noticias_cadastro(app, req, res);
	});

	app.post('/noticias/salvar', function(req, res){
		app.app.controllers.c_noticias.noticias_salvar(app, req, res);
	});
}