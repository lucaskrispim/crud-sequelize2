const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Contato = require('../models/Contato');

const connection = new Sequelize(dbConfig);

Contato.init(connection);

module.exports = connection;