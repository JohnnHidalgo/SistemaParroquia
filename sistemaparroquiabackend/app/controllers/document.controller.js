'use strict'

const dataModels = require('../models/document.model')
const connection = require('../../config/connection')


/*
async function getDocument(req, res) {
    dataModels.getCars((data, error) => {
        // 404 500
        res.json(data)
    })
}
*/

function getDocuments(req, res) {
    res.json({ message: 'los carros' })
}


function getOneCar(req, res) {
    console.log("id : ", req.params)
    const { id } = req.params
    dataModels.getOneCar(id, (data, error) => {
        res.json(data)
    })
}

function addCar(req, res) {

    const { marca, descripcion } = req.body
    console.log(`carros : ${marca}, ${descripcion}`)
    dataModels.addCar({ marca, descripcion }, (data, error) => {
        res.json(data)
    })
}

function editCar(req, res) {
    const { id } = req.params
    const { marca, descripcion } = req.body
    dataModels.editCar({ id, marca, descripcion }, (data, error) => {
        res.json(data)
    })
}

function deleteCar(req, res) {
    const { id } = req.params
    dataModels.deleteCar(id, (data, error) => {
        res.json(data)
    })

}
module.exports = {
    getDocuments,
    getOneCar,
    addCar,
    editCar,
    deleteCar
}