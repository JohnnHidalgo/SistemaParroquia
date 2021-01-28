'use strict'

const personModels = require('../models/person.model')
const connection = require('../../config/connection')

function getPersons(req, res, next) {
    personModels.getPersons((data, error) => {
        res.json(data)
    })
}

function getOnePerson(req, res) {
    console.log("id : ", req.params)
    const { idperson } = req.params
    personModels.getOnePerson({ idperson }, (data, error) => {
        res.json(data)
    })
}

function getOnePersonCatequesis(req, res) {
    console.log("id : ", req.params)
    const { idperson } = req.params
    personModels.getOnePersonCatequesis({ idperson }, (data, error) => {
        res.json(data)
    })
}

function getOnePersonCatGroup(req, res) {
    const { idperson } = req.params
    personModels.getOnePersonCatGroup({ idperson }, (data, error) => {
        res.json(data)
    })
}

function addPerson(req, res) {
    const { lastname, secondlastname, firstname, secondname, dateborn, address, zone, phone, cellphone, recibo, idcatequesistype, tx_user, tx_date, active } = req.body
    personModels.addPerson({ lastname, secondlastname, firstname, secondname, dateborn, address, zone, phone, cellphone, recibo, idcatequesistype, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editPerson(req, res) {
    const { idperson } = req.params
    const { lastname, secondlastname, firstname, secondname, dateborn, address, zone, phone, cellphone, recibo, idcatequesistype, tx_user, tx_date, active } = req.body
        /*
        Aqui falta el editar persona    
        */
    const { title } = req.body
    personModels.editPerson({ idperson, title }, (data, error) => {
        res.json(data)
    })
}

function deletePerson(req, res) {
    const { idperson } = req.params
    personModels.deletePerson(idperson, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getPersons,
    getOnePerson,
    getOnePersonCatequesis,
    getOnePersonCatGroup,
    addPerson,
    editPerson,
    deletePerson
}