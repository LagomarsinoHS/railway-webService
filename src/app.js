const path = require("path");
const express = require("express");
const app = express();
const hbs = require('hbs')
//La carpeta public tiene prioridad sobre las rutas, si en src creo una carpeta llamada hola-mundo. Tendra preferencia sobre la ruta get de abajo

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, '../views/partials'));

// Servir contenido estático
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render("home", {
    nombre: "Humberto",
    titulo: "Curso de node",
  });
});

app.get("/generics", (req, res) => {
  res.render('generics', {
    nombre: "Humberto",
    titulo: "Curso de node",
  })
});

app.get("/elements", (req, res) => {
  res.render('elements', {
    nombre: "Humberto",
    titulo: "Curso de node",
  })
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/404.html"));
});

module.exports = app;
