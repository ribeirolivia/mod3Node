/// aqui cria o BD
const mongoose = require('mongoose');
// url de conexao -> mongodb://servidor:porta/nome do banco
// useNewUrlParser --> Para que o Moongoose use o novo sistema de Url
// useUnifiedTopology --> Mecanismo de monitoramento de Banco de Dados
function Conn(url, porta, banco){
    mongoose.connect(`mongodb+srv://DBAdmin:pZ3s4lmjN4XFCIaU@cluster0.sl93b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        }).then(() => {
            console.log("MongoDB connected")
        }).catch((err) => { //sempre retorna um erro
            console.log(err)
        });

}


module.exports = Conn;