import express from 'express'; //biblioteca para gerenciar rotas http
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';
import errorHandler from './middlewares/error-handler.middleware';

const app = express(); 

//configurações da aplicação
app.use(express.json());
app.use(express.urlencoded( {extended : true}))

//configurações da rota
app.use(usersRoute);
app.use(statusRoute);

//configuração dos Handlers de Erro
app.use(errorHandler);

//Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000')
});