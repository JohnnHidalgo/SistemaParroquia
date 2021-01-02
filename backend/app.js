const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3050;
const app = express();

app.use(bodyParser.json());

// MySql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Angular',
    database: 'parroquia',
    port: 3307,
});

// Route
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});


app.get('/document', (req, res) => {
    const sql = 'SELECT * FROM document';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

// Check connect
connection.connect(error => {
    if (error) throw error;
    console.log('Database server running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));