'use strict'

const catequistaModels = require('../models/catequista.model')
const connection = require('../../config/connection')

function getCatequistas(req, res, next) {
    catequistaModels.getCatequistas((data, error) => {
        res.json(data)
    })
}

function getOneCatequista(req, res) {
    console.log("id : ", req.params)
    const { idcatequista } = req.params
    catequistaModels.getOneCatequista({ idcatequista }, (data, error) => {
        res.json(data)
    })
}

function addCatequista(req, res) {
    const { lastname, secondlastname, firstname, secondname, cellphone, idcatequistatype, tx_user, tx_date, active } = req.body
    catequistaModels.addCatequista({ lastname, secondlastname, firstname, secondname, cellphone, idcatequistatype, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editCatequista(req, res) {
    const { idcatequista } = req.params
    const { lastname, secondlastname, firstname, secondname, cellphone, idcatequistatype, tx_user, tx_date, active } = req.body
    catequistaModels.editCatequista({ idcatequista, lastname, secondlastname, firstname, secondname, cellphone, idcatequistatype, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function deleteCatequista(req, res) {
    const { idcatequista } = req.params
    catequistaModels.deleteCatequista(idcatequista, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getCatequistas,
    getOneCatequista,
    addCatequista,
    editCatequista,
    deleteCatequista
}