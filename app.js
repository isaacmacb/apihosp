const express = require('express');
const app = express();
const path = require('path');

const loginRoutes = require('./routes/login'); // Importe as rotas relacionadas ao login
const cadastroRoutes = require('./routes/cadastro'); // Importe as rotas relacionadas ao cadastro

const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('index'); // Renderize a visualização "index.ejs"
});

// Use as rotas relacionadas ao login definidas em login.js
app.use(loginRoutes);

// Use as rotas relacionadas ao cadastro definidas em cadastro.js
app.use(cadastroRoutes);

// Rota para a página de cadastro
app.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
