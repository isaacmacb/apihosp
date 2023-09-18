const express = require('express');
const router = express.Router();

// Rota para a página de login
router.get('/login', (req, res) => {
  res.render('login'); // Renderize a visualização "login.ejs"
});

// Rota para processar o formulário de login (POST)
router.post('/login', (req, res) => {
  // Lógica de autenticação aqui
});

module.exports = router;
