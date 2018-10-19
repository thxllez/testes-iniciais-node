var app = require('./config/server.js'); //recuperando configuraçoes do servidor que estão dentro do módulo config/server.js

app.listen(3000, function(){ //servidor fica escutando a porta 3000
	console.log('Servidor ONLINE');
});