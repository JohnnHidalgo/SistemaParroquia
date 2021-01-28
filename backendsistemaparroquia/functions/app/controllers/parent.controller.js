'use strict'

const parentModels = require('../models/parent.model')
const connection = require('../../config/connection')

function getParents(req, res, next) {
    parentModels.getParents((data, error) => {
        res.json(data)
    })
}

function getOneParent(req, res) {
    console.log("id : ", req.params)
    const { idparent } = req.params
    parentModels.getOneParent({ idparent }, (data, error) => {
        res.json(data)
    })
}

function getLastId(req, res) {
    parentModels.getLastId((data, error) => {
        res.json(data)
    })
}

function addParent(req, res) {
    const { lastname, secondlastname, firstname, secondname, dateborn, phone, cellphone, tx_user, tx_date, active } = req.body
    parentModels.addParent({ lastname, secondlastname, firstname, secondname, dateborn, phone, cellphone, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editParent(req, res) {
    const { idparent } = req.params
    const { lastname, secondlastname, firstname, secondname, dateborn, phone, cellphone, tx_user, tx_date, active } = req.body
    parentModels.editParent({ idparent, lastname, secondlastname, firstname, secondname, dateborn, phone, cellphone, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function deleteParent(req, res) {
    const { idparent } = req.params
    parentModels.deleteParent({ idparent }, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getParents,
    getOneParent,
    getLastId,
    addParent,
    editParent,
    deleteParent
}