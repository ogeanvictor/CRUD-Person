'use strict'

const mongoose = require('mongoose');
const { schema } = require('../models/person');
const Person = mongoose.model('Person', schema);

exports.save = async (person) => {
    try {
        let formatedBornDate = person.bornDate
        console.log(formatedBornDate)
        let savedPerson = await new Person(person).save();
        return savedPerson;
    } catch(error) {
        return {message: error.message};
    }
};

exports.findAll = async () => {
    try {
        let persons = await Person.find();
        return persons;
    } catch(error) {
        return {message: error.message};
    }
};

exports.update = async (person) => {
    try {
        let updatedPerson = await Person.findByIdAndUpdate(person.id, person, {new:true});
        return updatedPerson;
    } catch(error) {
        return {message: error.message};
    }
};

exports.findById = async (id) => {
    try {
        let person = await Person.findById(id);
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
