const HttpStatusCodes = require('http-status-codes')

const service = require('../service/person')

exports.save = async (req,res) => {
    try {
        console.log(req.body)
        let person = await service.save(req.body);
        console.log(person)
        res.status(HttpStatusCodes.StatusCodes.OK).send(person);
    } catch(error) {
       res.status(HttpStatusCodes.StatusCodes.BAD_REQUEST).send({"message": error.message});
    }
};

exports.findAll = async (req,res) => {
    try {
        let persons = await service.findAll();
        res.status(HttpStatusCodes.StatusCodes.OK).send(persons);
    } catch(error) {
        res.status(HttpStatusCodes.StatusCodes.BAD_REQUEST).send({"message": error.message});
    }
};

exports.update = async (req,res) => {
    try {
        let person = await service.update(req.body)
        res.status(HttpStatusCodes.StatusCodes.OK).send(person);
    } catch(error) {
        res.status(HttpStatusCodes.StatusCodes.BAD_REQUEST).send({"message": error.message});
    }
};

exports.findById = async (req,res) => {
    try {
        let person = await service.findById(req.params.id)
        res.status(HttpStatusCodes.StatusCodes.OK).send(person);
    } catch(error) {
        res.status(HttpStatusCodes.StatusCodes.BAD_REQUEST).send({"message": error.message});
    }
};

exports.delete = async (req,res) => {
    try {
        let person = await service.delete(req.params.id);
        res.status(HttpStatusCodes.StatusCodes.OK).send(person);
    } catch(error) {
        res.status(HttpStatusCodes.StatusCodes.BAD_REQUEST).send({"message": error.message});
    }
};
