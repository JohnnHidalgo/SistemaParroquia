'use strict'

const saleProductModels = require('../models/saleproduct.model')
const connection = require('../../config/connection')

function getSaleProduts(req, res) {
    console.log('sql');

    saleProductModels.getSaleProduts((data, error) => {
        res.json(data)
    })
}

function getOneSaleProdut(req, res) {
    const { idproductsale } = req.params
    saleProductModels.getOneSaleProdut({ idproductsale }, (data, error) => {
        res.json(data)
    })
}

function getProductSaleBySale(req, res) {
    const { idsale } = req.params
    saleProductModels.getAllProductSaleBySale({ idsale }, (data, error) => {
        res.json(data)
    })
}

function addProductSale(req, res) {
    const { idsale, idproducto } = req.body
    saleProductModels.addProductSale({ idsale, idproducto }, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getSaleProduts,
    getOneSaleProdut,
    getProductSaleBySale,
    addProductSale
}