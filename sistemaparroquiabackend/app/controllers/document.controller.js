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

    const { title, tx_user, tx_date, active } = req.body
    console.log(`document : ${title}, ${tx_user}, ${tx_date}, ${active}`)
    dataModels.addDocument({ title, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editDocument(req, res) {
    const { iddocument } = req.params
    const { title } = req.body
    dataModels.editDocument({ iddocument, title }, (data, error) => {
        res.json(data)
    })
}

function deleteDocument(req, res) {
    const { iddocument } = req.params
    dataModels.deleteDocument(iddocument, (data, error) => {
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