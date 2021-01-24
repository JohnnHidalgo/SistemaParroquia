'use strict'

const connection = require('../../config/connection')

var parentModels = {
    getParents: (callback) => {
        if (connection) {
            let sql = `select * from parent where active=true;`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneParent: (data, callback) => {
        console.log(`el idparent : ${data}`)
        if (connection) {
            let sql = `select * from parent where idparent = ${connection.escape(data.idparent)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addParent: (data, callback) => {
        if (connection) {
            let sql = `insert into parent(lastname,secondlastname,firstname,secondname,dateborn,phone,cellphone,tx_user,tx_date,active) values (${connection.escape(data.lastname)}, ${connection.escape(data.secondlastname)}, ${connection.escape(data.firstname)},${connection.escape(data.secondname)}, ${connection.escape(data.dateborn)}, ${connection.escape(data.phone)}, ${connection.escape(data.cellphone)}, ${connection.escape(data.tx_user)},${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'parent insertada' })
            })
        }
    },
    editParent: (data, callback) => {
        if (connection) {
            let sql = `update parent set lastname = ${connection.escape(data.lastname)}, lastname = ${connection.escape(data.lastname)},secondlastname = ${connection.escape(data.secondlastname)},firstname = ${connection.escape(data.firstname)},secondname = ${connection.escape(data.secondname)},dateborn = ${connection.escape(data.dateborn)},phone = ${connection.escape(data.phone)},cellphone = ${connection.escape(data.cellphone)},,tx_user = ${connection.escape(data.tx_user)},tx_date = ${connection.escape(data.tx_date)},active = ${connection.escape(data.active)}where idparent = ${connection.escape(data.idparent)}`

            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'persona actualizado' })
            })
        }
    },
    deleteParent: (data, callback) => {
        if (connection) {
            let sql = `update parent set active = false where idparent = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'parent eliminado' })
            })
        }
    }
}

module.exports = parentModels