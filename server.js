const express = require("express");
const hbs = require("hbs");
const app = express();
app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/parcials')
app.set('view engine', 'hbs')

const port = process.env.PORT || 3000

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
})

app.get("/", (req, res) => {
  res.render('home',{
      nombre: 'Sebastian'
  });
});
app.get("/about", (req, res) => {
    res.render('about');
  });

app.listen(port,() => {
  console.log(`EScuchando el puerto ${port}`);
});
