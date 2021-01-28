'use strict'

const connection = require('../../config/connection')

var catequistaModels = {
    getCatequistas: (callback) => {
        if (connection) {
            let sql = `select a.idcatequista,a.lastname,a.secondlastname,a.firstname,a.secondname,a.cellphone,b.catequistatype,a.tx_user,a.tx_date,a.active from catequista a, catequistatype b where a.idcatequistatype=b.idcatequistatype and a.active=true;`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneCatequista: (data, callback) => {
        console.log(`el idperson : ${data}`)
        if (connection) {
            let sql = `select * from catequista where idcatequista = ${connection.escape(data.idcatequista)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },

    addCatequista: (data, callback) => {
        if (connection) {
            let sql = `insert into catequista(lastname,secondlastname,firstname,secondname,cellphone,idcatequistatype,tx_user,tx_date,active) values (${connection.escape(data.lastname)}, ${connection.escape(data.secondlastname)}, ${connection.escape(data.firstname)}, ${connection.escape(data.secondname)}, ${connection.escape(data.cellphone)}, ${connection.escape(data.idcatequistatype)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)} , ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'catequista insertada' })
            })
        }
    },
    editCatequista: (data, callback) => {
        if (connection) {
            let sql = `update catequista set lastname = ${connection.escape(data.lastname)},secondlastname = ${connection.escape(data.secondlastname)},firstname = ${connection.escape(data.firstname)},secondname = ${connection.escape(data.secondname)},cellphone = ${connection.escape(data.cellphone)},idcatequistatype = ${connection.escape(data.idcatequistatype)},tx_user = ${connection.escape(data.tx_user)}, tx_date = ${connection.escape(data.tx_date)}, active = ${connection.escape(data.active)} where idcatequista = ${connection.escape(data.idcatequista)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'catequista actualizado' })
            })
        }
    },
    deleteCatequista: (data, callback) => {
        if (connection) {
            let sql = `update catequista set active = false where idcatequista = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'catequista eliminado' })
            })
        }
    }
}

module.exports = catequistaModels