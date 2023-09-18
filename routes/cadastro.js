const pool = require('./db'); // Importe o módulo de configuração da conexão com o PostgreSQL

app.post('/cadastro', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verifique se o usuário já existe no banco de dados
    const existingUser = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

    if (existingUser.rows.length > 0) {
      // O usuário já existe, exiba uma mensagem de erro na página de cadastro
      return res.render('cadastro', { error: 'Usuário já existe' });
    }

    // Insira o novo usuário no banco de dados
    const newUser = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
      [username, password]
    );

    // Redirecione o usuário para a página de login após o cadastro bem-sucedido
    res.redirect('/'); // Pode redirecionar para a página de login ou outra página de sua escolha
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).send('Erro interno do servidor');
  }
});
