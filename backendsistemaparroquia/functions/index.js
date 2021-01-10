const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
var express = require('express');
var apinode = express();

apinode.use(express.urlencoded({ extended: false }))
apinode.use(express.json())
apinode.use(require('./app/routes/document.route'))
const { getDocuments, getOneDocument, addDocument, editDocument, deleteDocument } = require('./app/controllers/document.controller')

apinode.get('/', getDocuments);

apinode.get('/test/', function(req, res) {
    res.send('The best app!');
});

/*
apinode.listen(3000, () => {
    console.log("Server running on port 3000");
});
*/

exports.sistemaparroquiabackend = functions.https.onRequest(apinode);