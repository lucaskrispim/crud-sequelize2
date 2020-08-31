const Contato = require('../models/Contato');
const { where } = require('sequelize');

module.exports = {
    async index(req, res) {
        try {
            const contato = await Contato.findAll();
            return res.json(contato);
        } catch (err) {
            return res.json(err);
        }

    },
    async store(req, res) {
        try {
            const { name, phone, email } = req.body;
            const contato = await Contato.create({ name, phone, email });
            return res.json(contato);
        } catch (err) {
            return res.json(err)
        }

    },
    async atualizar(req,res){
        try{
            const { name, phone, email } = req.body;
            const contato = await Contato.update({name,phone,email},{where: {"id":req.params.id } })
            const retorno = await Contato.findOne({where: {"id":req.params.id } });
            return res.json(retorno);
        }catch(err){
            return res.json(err)
        }
    }, 
    async deletar(req,res){
        try{
            const contato = await Contato.destroy({where: {"id":req.params.id } })
            return res.json({"deletato":true});
        }catch(err){
            return res.json(err);
        }
    }
};