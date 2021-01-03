const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.PORT /*|| 3050 */ ;
const app = express();

app.use(bodyParser.json());

// MySql
var db_config = {
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b188da1c23515d',
    password: '13024d4e',
    database: 'heroku_3f3bac3fbcbbd09',
};

/*
const connection = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b188da1c23515d',
    password: '13024d4e',
    database: 'heroku_3f3bac3fbcbbd09',
});
*/

var connection;
// Route
connection = mysql.createConnection(db_config);
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

app.get('/usertype', (req, res) => {
    const sql = 'SELECT * FROM usertype';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/user', (req, res) => {
    const sql = 'SELECT * FROM user';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/catequistatype', (req, res) => {
    const sql = 'SELECT * FROM catequistatype';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/catequista', (req, res) => {
    const sql = 'SELECT * FROM catequista';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/catequesistype', (req, res) => {
    const sql = 'SELECT * FROM catequesistype';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/catequesistype', (req, res) => {
    const sql = 'SELECT * FROM catequesistype';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
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

app.get('/material', (req, res) => {
    const sql = 'SELECT * FROM material';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/parent', (req, res) => {
    const sql = 'SELECT * FROM parent';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/godparent', (req, res) => {
    const sql = 'SELECT * FROM godparent';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/person', (req, res) => {
    const sql = 'SELECT * FROM person';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/personmaterial', (req, res) => {
    const sql = 'SELECT * FROM personmaterial';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/persondocument', (req, res) => {
    const sql = 'SELECT * FROM persondocument';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/parentdocument', (req, res) => {
    const sql = 'SELECT * FROM parentdocument';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/godparentdocument', (req, res) => {
    const sql = 'SELECT * FROM godparentdocument';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/parentperson', (req, res) => {
    const sql = 'SELECT * FROM parentperson';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/godparentperson', (req, res) => {
    const sql = 'SELECT * FROM godparentperson';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/catgroup', (req, res) => {
    const sql = 'SELECT * FROM catgroup';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/personcatequistagroup', (req, res) => {
    const sql = 'SELECT * FROM personcatequistagroup';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/parentcatequistagroup', (req, res) => {
    const sql = 'SELECT * FROM parentcatequistagroup';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/fecha', (req, res) => {
    const sql = 'SELECT * FROM fecha';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/asistencia', (req, res) => {
    const sql = 'SELECT * FROM asistencia';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/personcatequistagroupasistencia', (req, res) => {
    const sql = 'SELECT * FROM personcatequistagroupasistencia';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/parentcatequistagroupasistencia', (req, res) => {
    const sql = 'SELECT * FROM parentcatequistagroupasistencia';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/producto', (req, res) => {
    const sql = 'SELECT * FROM producto';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/venta', (req, res) => {
    const sql = 'SELECT * FROM venta';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/productoventa', (req, res) => {
    const sql = 'SELECT * FROM productoventa';

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