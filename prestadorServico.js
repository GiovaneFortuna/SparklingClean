// prestadorServico.js

// Selecionando o formulário e adicionando um event listener para o envio
document.getElementById('form-diarista').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio tradicional do formulário

  // Captura os dados do formulário
  const nome = document.getElementById('diarista-nome').value;
  const email = document.getElementById('diarista-email').value;
  const telefone = document.getElementById('diarista-telefone').value;
  const endereco = document.getElementById('diarista-endereco').value;

localStorage.setItem('prestadorDeServico', JSON.stringify({nome: nome, email: email, telefone: telefone, endereco: endereco}));

  console.log('Diarista Cadastrada:');
  console.log('Nome:', nome);
  console.log('E-mail:', email);
  console.log('Telefone:', telefone);
  console.log('Endereço:', endereco);

  alert('Diarista cadastrada com sucesso!');

  document.getElementById('form-diarista').reset();
});
