const express = require('express');
const path = require('path');  // Certifique-se de incluir o módulo path

const app = express();
const port = 3000;

// Define o diretório para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
