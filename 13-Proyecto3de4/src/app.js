const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { config } = require("dotenv");
config();

const bookRoutes = require("./routes/book.routes");

// Acá usamos express para los Middlewares
const app = express();
app.use(bodyParser.json());

// Nos conectamos con MongoDB


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
