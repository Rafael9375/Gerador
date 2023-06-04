const express = require("express");
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(userRoutes);

app.listen(8091, function(){
    console.log("Servidor iniciado");
});