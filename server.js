const express = require('express');
const  methodOverride = require('method-override');
//importante a rota 
const initialRouters = require('./src/routes/initial.routes')
const userRoutes = require('./src/routes/user.routes')
//inizialicao do express
const server = express();

// define o ejs como view engine

server.set('view engine', 'ejs');

// define o diretorio de viwes
server.set('views', './src/views');

//define diretorio de arquivos estaticos (public)
server.use(express.static(__dirname + '/public'));

//permitir que o servidor use o metodo put e delite
server.use(methodOverride('_method'));

// permitir o uso do formulario multpart/form-data
server.use(express.urlencoded({extended:false}));

//rotas
server.use('/',initialRouters)
server.use('/users',userRoutes)

//inicializando o servidor 
server.listen(3000, ()=> {
    console.log('Servidor inicializado na porta 3000');
})