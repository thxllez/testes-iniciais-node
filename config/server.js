var express = require('express'); //pegando módulo do express
var consign = require('consign'); //recuperando o módulo do consign
var bodyParser = require('body-parser'); //recuperando o módulo do body-parser
var expressValidator = require('express-validator'); // recuperando o módulo do express-validator

var appConfig = express(); //executando o objeto do express e atribuindo à variável appConfig
appConfig.set('view engine', 'ejs'); //declarando que o motor de geraçao de views será o ejs.
appConfig.set('views', './app/views'); //setando diretorio padrao de views
//como o conteudo deste arquivo será exportado para o app.js na raiz do projeto, a busca será feita a partir do local do app.js; por isso utiliza-se ./app/views para determinar o diretorio de views

appConfig.use(bodyParser.urlencoded({extended : true})); //implementando o body-parser no appConfig efetivamente
//extended é uma propriedade para o bodyParser poder interpretar formulários mais complexos
appConfig.use(expressValidator()); //implementando o body-parser no appConfig efetivamente

consign()
	.include('./app/routes') //faz o carregamento automatico de todas as rotas e inclui dentro de appConfig
	.then('config/dbConnection.js') //faz o carregamento automatico do módulo de conexão com o bd e inclui dentro de appConfig
	.then('./app/models') //faz o carregamento automatico dos models e inclui dentro de appConfig
	.into(appConfig); //carrega tudo dentro da variável appConfig, que será exportada para o servidor em app.js

// O app agora contém todos os módulos carregados no consign

module.exports = appConfig; // exporta o appConfig para a variável app do arquivo app.js contendo todas as configurações e carregamentos feitos neste arquivo.