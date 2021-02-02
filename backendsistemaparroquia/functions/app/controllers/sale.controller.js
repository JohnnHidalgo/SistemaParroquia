'use strict'

const saleModels = require('../models/sale.model')

function getSales(req, res, next) {
    saleModels.getSales((data, error) => {
        res.json(data)
    })
}

function getOneSale(req, res) {
    const { idsale } = req.params
    saleModels.getOneSale({ idsale }, (data, error) => {
        res.json(data)
    })
}

function addSale(req, res) {
    const { personsame, totalprice, comentary, datesale, tx_user, tx_date, active } = req.body
    saleModels.addSale({ personsame, totalprice, comentary, datesale, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function deleteSale(req, res) {
    const { idsale } = req.params
    saleModels.deleteSale(idsale, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getSales,
    getOneSale,
    addSale,
    deleteSale
}