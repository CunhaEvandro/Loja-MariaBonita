  // Conectando com o banco de dados
async function connetc() {
    if(global.connection && global.connection.state !== 'disconnected')
      return global.connection;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection("mysql://root@localhost:3306/crud");
  console.log("Conectou no Mysql!");
  return connection;

}

connect();

async function selectCustomers(){
    const conn = await connect();
    return await conn.query('SELECT * FROM cliente;');
}

module.exports = { selectCustomers}