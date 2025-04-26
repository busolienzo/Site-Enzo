document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
  
    if (nome && email && mensagem) {
      document.getElementById('respostaForm').textContent = `Obrigado, ${nome}! Entraremos em contato em breve.`;
      document.getElementById('formContato').reset();
    } else {
      document.getElementById('respostaForm').textContent = 'Por favor, preencha todos os campos.';
    }
  });
  