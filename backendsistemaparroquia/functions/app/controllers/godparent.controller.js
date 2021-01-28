'use strict'

const godparentModels = require('../models/godparent.model')
const connection = require('../../config/connection')

function getGodParents(req, res, next) {
    godparentModels.getGodParents((data, error) => {
        res.json(data)
    })
}

function getOneGodParent(req, res) {
    console.log("id : ", req.params)
    const { idgodparent } = req.params
    godparentModels.getOneGodParent({ idgodparent }, (data, error) => {
        res.json(data)
    })
}

function getLastId(req, res) {
    godparentModels.getLastId((data, error) => {
        res.json(data)
    })
}

function addGodParent(req, res) {
    const { lastname, secondlastname, firstname, secondname, dateborn, phone, cellphone, tx_user, tx_date, active } = req.body
    godparentModels.addGodParent({ lastname, secondlastname, firstname, secondname, dateborn, phone, cellphone, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editGodParent(req, res) {
    const { idgodparent } = req.params
    const { lastname, secondlastname, firstname, secondname, dateborn, phone, cellphone, tx_user, tx_date, active } = req.body
    godparentModels.editGodParent({ idgodparent, lastname, secondlastname, firstname, secondname, dateborn, phone, cellphone, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function deleteGodParent(req, res) {
    const { idgodparent } = req.params
    godparentModels.deleteGodParent({ idgodparent }, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getGodParents,
    getOneGodParent,
    getLastId,
    addGodParent,
    editGodParent,
    deleteGodParent
}