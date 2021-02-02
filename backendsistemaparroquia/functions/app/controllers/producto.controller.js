'use strict'

const productModels = require('../models/producto.model')

function getProducts(req, res, next) {
    productModels.getProducts((data, error) => {
        res.json(data)
    })
}

function getOneProduct(req, res) {
    console.log("id : ", req.params)
    const { idproducto } = req.params
    productModels.getOneProduct({ idproducto }, (data, error) => {
        res.json(data)
    })
}

function addProduct(req, res) {
    const { productname, description, price, quantity, tx_user, tx_date, active } = req.body
    productModels.addProduct({ productname, description, price, quantity, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editProduct(req, res) {
    const { idproducto } = req.params
    const { productname, description, price, quantity } = req.body
    productModels.editProduct({ idproducto, productname, description, price, quantity }, (data, error) => {
        res.json(data)
    })
}

function deleteProduct(req, res) {
    const { idproducto } = req.params
    productModels.deleteProduct(idproducto, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getProducts,
    getOneProduct,
    addProduct,
    editProduct,
    deleteProduct
}