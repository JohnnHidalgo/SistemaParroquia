'use strict'

const dataModels = require('../models/document.model')
const connection = require('../../config/connection')


function getDocuments(req, res) {
    dataModels.getDocuments((data, error) => {
        res.json(data)
    })
}


function getOneDocument(req, res) {
    console.log("id : ", req.params)
    const { id } = req.params
    dataModels.getOneDocument(id, (data, error) => {
        res.json(data)
    })
}

function addDocument(req, res) {

    const { title, tx_user, tx_date } = req.body
    console.log(`document : ${title}, ${tx_user}, ${tx_date}`)
    dataModels.addDocument({ title, tx_user, tx_date }, (data, error) => {
        res.json(data)
    })
}

function editDocument(req, res) {
    const { id } = req.params
    const { marca, descripcion } = req.body
    dataModels.editCar({ id, marca, descripcion }, (data, error) => {
        res.json(data)
    })
}

function deleteDocument(req, res) {
    const { id } = req.params
    dataModels.deleteCar(id, (data, error) => {
        res.json(data)
    })

}
module.exports = {
    getDocuments,
    getOneDocument,
    addDocument,
    editDocument,
    deleteDocument
}