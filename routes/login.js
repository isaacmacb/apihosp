app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Aqui você deve implementar a lógica de autenticação, como verificar as credenciais no banco de dados.
    // Vou dar um exemplo simples usando um objeto para simular um banco de dados.
  
    // Suponha que você tenha uma lista de usuários em memória (substitua isso por uma consulta real ao banco de dados).
    const users = [
      { username: 'admin', password: 'password123', isAdmin: true },
      { username: 'user', password: '123456', isAdmin: false },
    ];
  
    // Verifique se o usuário existe na lista
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      // Autenticação bem-sucedida, armazene informações do usuário na sessão (ou use tokens, dependendo da estratégia)
      req.session.user = user;
      res.redirect('/admin'); // Redirecione para a área de administração ou outra página após o login bem-sucedido
    } else {
      // Autenticação falhou, exiba uma mensagem de erro na página de login
      res.render('index', { error: 'Credenciais inválidas' });
    }
  });
  