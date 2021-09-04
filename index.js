
const express = require("express");
const app = express();
app.use(express.json());

const Conn = require("./conn/conn");

Conn("localhost", 27017, "musicas");

const port = 3000;

const musica = require("./routers/musicas.routes");
app.use("/musicas", musica);

const filme = require("./routers/filmes.routes");
app.use("/filme", filme);

app.listen(process.env.PORT || port, () => {
    console.info(`App rodando na porta ${port}`);
});
