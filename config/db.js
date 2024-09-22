const mysql = require('mysql2');


// Configurar a conexão com o banco de dados
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: "123456", // Substitua por sua senha de banco de dados
    database: 'mvc',
    port: 3302 // Certifique-se de que o banco de dados existe
});


// Conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro de conexão: ' + err.stack);
        return;
    }
    console.log('Conectado como ID ' + connection.threadId);
});


// Exportar a conexão como uma Promise
module.exports = connection.promise();