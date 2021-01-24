'use strict'

const parentPersonsModels = require('../models/parentperson.model')
const connection = require('../../config/connection')

function getParentPersons(req, res, next) {
    parentPersonsModels.getParentPersons((data, error) => {
        res.json(data)
    })
}

function getOneParentPerson(req, res) {
    console.log("id : ", req.params)
    const { idparentperson } = req.params
    parentPersonsModels.getOneParentPerson({ idparentperson }, (data, error) => {
        res.json(data)
    })
}

function getParentsByPerson(req, res) {
    console.log("id : ", req.params)
    const { idperson } = req.params
    parentPersonsModels.getParentsByPerson({ idperson }, (data, error) => {
        res.json(data)
    })
}

function addParentPerson(req, res) {
    const { idperson, idparent, active } = req.body
    parentPersonsModels.addParentPerson({ idperson, idparent, active }, (data, error) => {
        res.json(data)
    })
}


function deleteParentPerson(req, res) {
    const { idparentperson } = req.params
    parentPersonsModels.deleteParentPerson(idparentperson, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getParentPersons,
    getOneParentPerson,
    getParentsByPerson,
    addParentPerson,
    deleteParentPerson
}