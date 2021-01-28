'use strict'

const connection = require('../../config/connection')

var productModels = {
    getProducts: (callback) => {
        if (connection) {
            let sql = `select * from producto where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneProduct: (data, callback) => {
        if (connection) {
            let sql = `select * from producto where idproducto = ${connection.escape(data.idproducto)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addProduct: (data, callback) => {
        if (connection) {
            let sql = `insert into producto(productname, description, price, quantity, tx_user, tx_date, active)
             values (${connection.escape(data.productname)},${connection.escape(data.description)},${connection.escape(data.price)}, ${connection.escape(data.quantity)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'documento insertado' })
            })
        }
    },
    editProduct: (data, callback) => {
        if (connection) {
            let sql = `update producto set productname = ${connection.escape(data.productname)},description = ${connection.escape(data.description)}, price = ${connection.escape(data.price)},quantity = ${connection.escape(data.quantity)} where idproducto = ${connection.escape(data.idproducto)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'document actualizado' })
            })
        }
    },
    deleteProduct: (data, callback) => {
        if (connection) {
            let sql = `update producto set active = false where idproducto = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'document eliminado' })
            })
        }
    }
}

module.exports = productModels