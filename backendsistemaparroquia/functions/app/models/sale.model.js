'use strict'

const connection = require('../../config/connection')

var saleModels = {
    getSales: (callback) => {
        if (connection) {
            let sql = `select * from sale where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneSale: (data, callback) => {
        if (connection) {
            let sql = `select * from sale where idsale = ${connection.escape(data.idsale)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addSale: (data, callback) => {
        if (connection) {
            let sql = `insert into sale(personname, totalprice, comentary, datesale, tx_user, tx_date, active) values (${connection.escape(data.personname)},${connection.escape(data.totalprice)},${connection.escape(data.comentary)}, ${connection.escape(data.datesale)},  ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'documento insertado' })
            })
        }
    },
    deleteSale: (data, callback) => {
        if (connection) {
            let sql = `update sale set active = false where idsale = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'document eliminado' })
            })
        }
    }
}

module.exports = saleModels