'use strict'

const godparentPersonsModels = require('../models/godparentperson.model')
const connection = require('../../config/connection')

function getGodParentPersons(req, res, next) {
    godparentPersonsModels.getGodParentPersons((data, error) => {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA")
        res.json(data)
    })
}

function getOneGodParentPerson(req, res) {
    console.log("id : ", req.params)
    const { iddogparenperson } = req.params
    godparentPersonsModels.getOneGodParentPerson({ iddogparenperson }, (data, error) => {
        res.json(data)
    })
}

function getGodParentsByPerson(req, res) {
    console.log("id : ", req.params)
    const { idperson } = req.params
    godparentPersonsModels.getGodParentsByPerson({ idperson }, (data, error) => {
        res.json(data)
    })
}

function addGodParentPerson(req, res) {
    const { idperson, idgodparent, active } = req.body
    godparentPersonsModels.addGodParentPerson({ idperson, idgodparent, active }, (data, error) => {
        res.json(data)
    })
}


function deleteGodParentPerson(req, res) {
    const { iddogparenperson } = req.params
    godparentPersonsModels.deleteGodParentPerson(iddogparenperson, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getGodParentPersons,
    getOneGodParentPerson,
    getGodParentsByPerson,
    addGodParentPerson,
    deleteGodParentPerson
}