'use strict'

const mongoose = require('mongoose');
const {cpf} = require('cpf-cnpj-validator');
const moment = require('moment');

const { schema } = require('../models/person');
const Person = mongoose.model('Person', schema);

exports.save = async (person) => {
    try {
        let cpfFormated = await exports.cpfValidator(person.cpf);
        person.cpf = cpfFormated;
        let savedPerson = await new Person(person).save();
        return savedPerson;
    } catch(error) {
        return {message: error.message};
    }
};

exports.findAll = async () => {
    try {
        let persons = await Person.find();

        for (let index = 0; index < persons.length; index++) {
            let formatedDate = moment(persons[index].bornDate).utc('br').format('DD/MM/YYYY HH:mm:ss')
            let newDate = new Date(formatedDate)
            persons[index].bornDate = newDate
        }
        
        return persons;
    } catch(error) {
        return {message: error.message};
    }
};

exports.update = async (person) => {
    try {
        let cpfFormated = await exports.cpfValidator(person.cpf);
        person.cpf = cpfFormated;

        let updatedPerson = await Person.findByIdAndUpdate(person.id, person, {new:true});
        return updatedPerson;
    } catch(error) {
        return {message: error.message};
    }
};

exports.findById = async (id) => {
    try {
        let person = await Person.findById(id);

        let formatedDate = moment(person.bornDate).utcOffset('br').format('DD/MM/YYYY HH:mm:ss');
        let newDate = new Date(formatedDate).toDate();
        person.bornDate = newDate;

        return person;
    } catch(error) {
        return {message: error.message};
    }
};

exports.delete = async (id) => {
    try {
        let deletedPerson = await Person.findByIdAndDelete(id);
        return deletedPerson;
    } catch(error) {
        return {message: error.message};
    }
};

exports.cpfValidator = async (personCpf) => {
    try {
        if (cpf.isValid(personCpf) == true) {
            personCpf = cpf.format(personCpf);
            return personCpf;
        }

        else {
            throw({message: "CPF Inválido"});
        }

    } catch (error) {
        return {message: error.message}
    }
};