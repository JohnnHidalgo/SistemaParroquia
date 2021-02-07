'use strict'

const connection = require('../../config/connection')

var saleProductModels = {
    
    getSaleProduts: (callback) => {
        if (connection) {
            let sql = `select * from productsale;`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },

    getOneSaleProdut: (data, callback) => {
        if (connection) {
            let sql = `select * from productsale where idproductsale = ${connection.escape(data.idproductsale)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },

    getAllProductSaleBySale: (data, callback) => {
        if (connection) {
            let sql = `select a.idsale, b.idproductsale, c.productname, c.price from sale a, productsale b, producto c where a.idsale = ${connection.escape(data.idsale)} and  a.idsale = b.idsale and b.idproducto = c.idproducto;`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },

    addProductSale: (data, callback) => {
        if (connection) {
            let sql = `insert into productsale(idsale, idproducto) values (${connection.escape(data.idsale)}, ${connection.escape(data.idproducto)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'productsale insertado' })
            })
        }
    },
}

module.exports = saleProductModels