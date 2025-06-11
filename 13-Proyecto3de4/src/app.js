const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { config } = require("dotenv");
config();

const bookRoutes = require("./routes/book.routes");

// Acá usamos express para los Middlewares
const app = express();
app.use(bodyParser.json()); // Parseador de Bodies

// Nos conectamos con la base de datos MongoDB
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME});
const db = mongoose.connection;

app.use('/books', bookRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
