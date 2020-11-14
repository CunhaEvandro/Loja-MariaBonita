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
    const [rows] = conn.query('SELECT * FROM cliente');
    return await rows;
}

async function insertCustomers(customer){
    const conn = await connetc();
    const sql = 'INSERT INTO cliente(nome, telefone, data-nascimento, endereço, bairro, cep, ponto-referencia, email) VALUES (?,?,?);';
    const values = [customer.nome, customer.telefone, customer.data-nascimento, customer.endereço, customer.bairro, customer.cep, customer.ponto-referencia, customer.email];
    await conn.query(sql, values);
}

async function updateCustomer(id,customer){
   const conn = await connect();
   const sql = 'UPDATE cliente SET nome=?, telefone=?, data-nascimento=?, endereço=?, bairro=?, cep=?, ponto-referencia, email=?';
   const values = [customer.nome, customer.telefone, customer.data-nascimento, customer.endereço, customer.bairro, customer.cep, customer.ponto-referencia, customer.email];
   await conn.query(sql, values);
}

module.exports = { selectCustomers, insertCustomers}