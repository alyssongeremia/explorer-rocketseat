// estructure express
const { request, response } = require("express");
const express = require("express");

const routes = require("./routes")

const app = express();
app.use(express.json()) // padrao utilizado para receber as informacoes
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is runnig on Port ${PORT}`));