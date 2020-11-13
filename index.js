(async () => {
    const db = require("./db");
    console.log('Começou!');
    console.log('SELECT * FROM cliente');
    const cliente = await db.selectCustomers();
    console.log(cliente);
})();