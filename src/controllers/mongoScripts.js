'use strict'

//Exportações
const HttpStatusCodes = require('http-status-codes');
const mongoose = require('mongoose');
const { cpf } = require('cpf-cnpj-validator');

//Models
const { schema } = require('../models/person');
const Person = mongoose.model('Person', schema);

exports.cleanCpfInvalids = async (req,res) => {
    try {
        let persons = await Person.find()

        persons.forEach(async (person) => {
            console.log(cpf.isValid(person.cpf))
            if (cpf.isValid(person.cpf) == true) {
                person.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3-\$4")
            }

            else {
                person.cpf = '00000000000'
            }

            await Person.findByIdAndUpdate(person.id, person, {new: true})
        })
        res.status(HttpStatusCodes.StatusCodes.OK).send(persons)
    } catch(error) {
        res.status(HttpStatusCodes.StatusCodes.BAD_REQUEST).send({"message": error.message});
    }
};

exports.formatedNumberPhone = async (req,res) => {
    try {
        let persons = await Person.find();

        persons.forEach(async (person) => {
            let formatedNumber = person.phone.replace(/[^0-9]/g, '');
            person.phone = formatedNumber;
            await Person.findByIdAndUpdate(person.id, person, {new: true});
        });
        
        res.status(HttpStatusCodes.StatusCodes.OK).send(persons);
    } catch(error) {
        res.status(HttpStatusCodes.StatusCodes.BAD_REQUEST).send({"message": error.message});
    }
};