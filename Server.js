const express = require("express");
const app = express();
const userRoutes = require('../Gerador/routes/userRoutes');

app.use(userRoutes);

app.listen(8091, function(){
    console.log("Servidor iniciado");
});