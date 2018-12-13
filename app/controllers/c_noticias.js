module.exports.noticias = function(app, req, res){
    var connection = app.config.dbConnection();
    var noticiasDAO = new app.app.models.NoticiasDAO(connection); //new -> realiza uma instancia do módulo

    noticiasDAO.getNoticias(function(error, result){
        if(error == null){
            res.render('noticias/v_noticias', {noticias : result});
        }else{
            res.send('Erro de conexão');
        }
    }); 
}

module.exports.noticias_cadastro = function(app, req, res){
    res.render('noticias/v_cad_noticias', {validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = function(app, req, res){
    var noticia = req.body;

    req.assert('titulo','Título é obrigatório').notEmpty();
    req.assert('resumo','Resumo é obrigatório').notEmpty();
    req.assert('resumo','Resumo deve conter entre 10 e 400 caracteres').len(10,400);
    req.assert('data','Data é obrigatória').notEmpty();
    //req.assert('data','Data inválida').isDate({format: 'YYYY-MM-DD'});

    var errosValid = req.validationErrors();

    if(errosValid){
        console.log(noticia);
        res.render('noticias/v_cad_noticias', {validacao: errosValid, noticia: noticia});
        return; // se der erro para aqui, para nao executar os códigos seguintes
    }

    var connection = app.config.dbConnection();
    var noticiasDAO = new app.app.models.NoticiasDAO(connection);

    noticiasDAO.saveNoticia(noticia, function(error, result){
        res.redirect('/noticias'); // redirecionar 
    });
    //importante que em toda requisiçao post, utilizemos o redirect para não ocorrer o problema do F5
}