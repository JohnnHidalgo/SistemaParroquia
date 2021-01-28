'use strict'

const connection = require('../../config/connection')

var personModels = {
    getPersons: (callback) => {
        if (connection) {
            let sql = `select a.idperson,a.lastname,a.secondlastname,a.firstname,a.secondname,a.dateborn,a.address,a.zone,a.phone,a.cellphone,a.recibo,b.catequesistype,a.tx_user,a.tx_date,a.active from person a, catequesistype b where a.idcatequesistype=b.idcatequesistype and a.active=true;`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOnePerson: (data, callback) => {
        console.log(`el idperson : ${data}`)
        if (connection) {
            let sql = `select * from person where idperson = ${connection.escape(data.idperson)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOnePersonCatequesis: (data, callback) => {
        console.log(`el idperson : ${data}`)
        if (connection) {
            let sql = `select a.idperson,a.lastname,a.secondlastname,a.firstname,a.secondname,a.dateborn,a.address,a.zone,a.phone,a.cellphone,a.recibo,b.catequesistype,a.tx_user,a.tx_date,a.active from person a, catequesistype b where idperson = ${connection.escape(data.idperson)} and a.idcatequesistype=b.idcatequesistype and a.active=true;`

            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOnePersonCatGroup: (data, callback) => {
        if (connection) {
            let sql = `select d.title, e.lastname, e.secondlastname, e.firstname, e.secondname, e.cellphone from personcatequistagroup c, catgroup d, catequista e where c.idcatequista=e.idcatequista and c.idperson=${connection.escape(data.idperson)} and c.idcatgroup = d.idcatgroup;`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addPerson: (data, callback) => {
        if (connection) {
            let sql = `insert into person(lastname,secondlastname,firstname,secondname,dateborn,address,zone,phone,cellphone,recibo,idcatequesistype,tx_user,tx_date,active) values (${connection.escape(data.lastname)}, ${connection.escape(data.secondlastname)}, ${connection.escape(data.firstname)},${connection.escape(data.secondname)}, ${connection.escape(data.dateborn)}, ${connection.escape(data.address)},${connection.escape(data.zone)}, ${connection.escape(data.phone)}, ${connection.escape(data.cellphone)},${connection.escape(data.recibo)}, ${connection.escape(data.idcatequesistype)}, ${connection.escape(data.tx_user)},${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'persona insertada' })
            })
        }
    },
    editPerson: (data, callback) => {
        if (connection) {
            let sql = `update person set lastname = ${connection.escape(data.lastname)},secondlastname = ${connection.escape(data.secondlastname)},firstname = ${connection.escape(data.firstname)},secondname = ${connection.escape(data.secondname)},dateborn = ${connection.escape(data.dateborn)},address = ${connection.escape(data.address)},zone = ${connection.escape(data.zone)},phone = ${connection.escape(data.phone)},cellphone = ${connection.escape(data.cellphone)},recibo = ${connection.escape(data.recibo)},idcatequesistype = ${connection.escape(data.idcatequesistype)},tx_user = ${connection.escape(data.tx_user)},tx_date = ${connection.escape(data.tx_date)},active = ${connection.escape(data.active)}where idperson = ${connection.escape(data.idperson)}`

            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'persona actualizado' })
            })
        }
    },
    deletePerson: (data, callback) => {
        if (connection) {
            let sql = `update person set active = false where idperson = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'persona eliminado' })
            })
        }
    }
}

module.exports = personModels