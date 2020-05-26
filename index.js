const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const path = require("path");

app.set("views", path.join(__dirname, "/Views"));
app.set("view engine", "ejs");

app.use(bodyParser());
app.use(express.static(path.join(__dirname, "/Src")));
app.use(require("./Route/router"));
app.use(express.static(path.join(__dirname, "/Src")));

app.listen(port, () => console.log(`Escuchando el puerto ${port}`));