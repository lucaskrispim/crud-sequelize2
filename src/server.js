const express = require('express');
const router = require('./routes/Contatos-routes');
require('./database/index')

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333,()=>{
    console.log('Servidor On!')
});