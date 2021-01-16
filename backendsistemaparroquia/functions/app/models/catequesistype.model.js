'use strict'

const connection = require('../../config/connection')

var catequesistypeModels = {
    getCatequesistypes: (callback) => {
        if (connection) {
            let sql = `select * from catequesistype where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneCatequesistype: (data, callback) => {
        console.log(`el idcatequesistype : ${data}`)
        if (connection) {
            let sql = `select * from catequesistype where idcatequesistype = ${connection.escape(data.idcatequesistype)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneCatequesistypeByType: (data, callback) => {
        console.log(`el catequesistype : ${data}`)
        if (connection) {
            let sql = `select * from catequesistype where catequesistype = ${connection.escape(data.catequesistype)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addCatequesistype: (data, callback) => {
        if (connection) {
            let sql = `insert into catequesistype(catequesistype,tx_user,tx_date,active) values (${connection.escape(data.catequesistype)}, ${connection.escape(data.tx_user)},${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'catequesistype insertada' })
            })
        }
    },
    editCatequesistype: (data, callback) => {
        if (connection) {
            let sql = `update catequesistype set catequesistype = ${connection.escape(data.catequesistype)} where idcatequesistype = ${connection.escape(data.idcatequesistype)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'catequesistype actualizado' })
            })
        }
    },
    deleteCatequesistype: (data, callback) => {
        if (connection) {
            let sql = `update catequesistype set active = false where idcatequesistype = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'catequesistype eliminado' })
            })
        }
    }
}

module.exports = catequesistypeModels