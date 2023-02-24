'use strict'

//Exportações
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
const router = express.Router();

// Carrega Rotas
const personRoutes = require('./routes/person');
app.use('/person', personRoutes);

// Body-Parser


// Carrega Models
const Person = require('./models/person');

//Conexão com o Banco de Dados
mongoose.connect('mongodb://127.0.0.1:27017/projetocrud01').then(() => {
    console.log('Conexão com o mongo estabelecida')
}).catch((error) => {
    console.log(error)
})

module.exports = app;