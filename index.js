(async () => {
    const db = require("./db");
    console.log('Começou!');
    console.log('INSERT INTO cliente');
    await db.insertCustomers({nome:"João", telefone: 28999659841, data_nascimento: 16/01/1952, endereço: "RuaEdmundodosSantos",
    bairro: "caixa_Z", cep:29304150, ponto_referencia: "RuaEdmundodosSantos", email:"joão22@gmail.com"});
    console.log('SELECT * FROM cliente');   
    const cliente = await db.selectCustomers();
    console.log(cliente);
})();