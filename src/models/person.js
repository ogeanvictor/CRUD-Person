'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },

    bornDate: {
        type: Date,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    cpf: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Person', schema)