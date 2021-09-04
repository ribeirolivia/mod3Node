const express = require('express');
const router = express.Router();
const Filme = require('../models/filmes');

router.get('/', async (res,req) =>{
    await Filme.find({})
    .then((filme) => {
        res.status(200).send(musica);
    })
    .catch((err) =>{
        res.status(400).send("Algo errado com a música. Tente novamente.");
    })
});
router.get('/findById/:id', async (req, res) =>{
    await Filme.find({_id : req.params.id})
    .then((filme)=> {
        res.status(200).send(filme);
    })
    .catch((err) =>{
        res.status(400).send("Algo errado com a musica. Tente novamente.");
        console.log(err);
    })
});
router.get('/findByName/:name', async (req, res) =>{
    await Filme.find({nome : req.params.name})
    .then((filme) =>{
        res.status(200).send(filme)
    })
    .catch((err) =>{
        res.status(400).send('Algo de errado com sua música. Tente novamente.')
    })
});

router.post('/add', async (req, res) =>{
    await Filme.create(req.body)
    .then(()=>{
        res.status(200).send("Música adicionada com sucesso!");
    }).catch((err) =>{
        res.status(400).send("Algo errada não está certo aqui :/");
    })
});

router.put('/update/:id', async (req, res) =>{
    await Filme.updateOne({_id : req.params.id}, req.body)
    .then(() =>{
        res.status(200).send('Atualizado com sucesso')
    })
    .catch((err) =>{
        res.status(400).send("Algo errada não está certo aqui :/");
        console.log(err);
    })
});

router.delete('/delete/:id', async (req, res) =>{
    await Filme.deleteOne({_id : req.params.id})
    .then(() =>{
        res.status(200).send('Deletado com sucesso');
    })
        .catch((err) =>
        res.status(400).send("Algo errado com a musica. Tente novamente."))
});

module.exports = router;