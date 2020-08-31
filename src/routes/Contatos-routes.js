const express = require('express');
const router = express.Router();
const ContatoController = require('../controllers/Contatos-controllers');
const Contato = require('../models/Contato');


router.post('/contatos',(ContatoController.store))
router.get('/contatos',(ContatoController.index))
router.put('/contatos/:id',(ContatoController.atualizar));
router.delete('/contatos/:id',(ContatoController.deletar))

module.exports = router;