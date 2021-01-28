'use strict'

const connection = require('../../config/connection')

var godparentModels = {
    getGodParents: (callback) => {
        if (connection) {
            let sql = `select * from godparent where active=true;`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneGodParent: (data, callback) => {
        console.log(`el idgodparent : ${data}`)
        if (connection) {
            let sql = `select * from godparent where idgodparent = ${connection.escape(data.idgodparent)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getLastId: (data, callback) => {
        if (connection) {
            let sql = `SELECT MAX(idgodparent) FROM godparent`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'este es el id' })
            })
        }
    },

    addGodParent: (data, callback) => {
        if (connection) {
            let sql = `insert into godparent(lastname,secondlastname,firstname,secondname,dateborn,phone,cellphone,tx_user,tx_date,active) values (${connection.escape(data.lastname)}, ${connection.escape(data.secondlastname)}, ${connection.escape(data.firstname)},${connection.escape(data.secondname)}, ${connection.escape(data.dateborn)}, ${connection.escape(data.phone)}, ${connection.escape(data.cellphone)}, ${connection.escape(data.tx_user)},${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'parent insertada' })
            })
        }
    },
    editGodParent: (data, callback) => {
        if (connection) {
            let sql = `update godparent set lastname = ${connection.escape(data.lastname)}, lastname = ${connection.escape(data.lastname)},secondlastname = ${connection.escape(data.secondlastname)},firstname = ${connection.escape(data.firstname)},secondname = ${connection.escape(data.secondname)},dateborn = ${connection.escape(data.dateborn)},phone = ${connection.escape(data.phone)},cellphone = ${connection.escape(data.cellphone)},,tx_user = ${connection.escape(data.tx_user)},tx_date = ${connection.escape(data.tx_date)},active = ${connection.escape(data.active)}where idparent = ${connection.escape(data.idparent)}`

            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'godparent actualizado' })
            })
        }
    },
    deleteGodParent: (data, callback) => {
        if (connection) {
            let sql = `update godparent set active = false where idgodparent = ${connection.escape(data.idgodparent)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'godparent eliminado' })
            })
        }
    }
}

module.exports = godparentModels