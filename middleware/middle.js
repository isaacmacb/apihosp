// Middleware de autenticação
function requireAdminAuth(req, res, next) {
    // Verifique se o usuário está autenticado (por exemplo, com base em sessões ou tokens)
    // Verifique se o usuário tem permissão de administrador
    if (req.isAuthenticated() && req.user.isAdmin) {
      return next(); // Continue para a próxima rota se o usuário for um administrador autenticado
    }
    // Caso contrário, redirecione-o para a página de login
    res.redirect('/login');
  }
  