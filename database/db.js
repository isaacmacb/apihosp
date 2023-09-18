const { MongoClient } = require('mongodb');

const url = 'sua_string_de_conexao'; // Substitua pela URL de conexão do MongoDB Atlas
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Conexão com o MongoDB Atlas estabelecida com sucesso!');
  } catch (error) {
    console.error('Erro na conexão com o MongoDB Atlas:', error);
  }
}

module.exports = { client, connectToMongoDB };
