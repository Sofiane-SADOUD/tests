const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'db',
	user: 'root',
	password: 'root'
});

connection.connect();
// connection.query();
connection.end();
