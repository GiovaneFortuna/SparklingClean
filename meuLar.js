// Função para lidar com o envio do formulário de cliente
document.getElementById('form-cliente').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nomeCliente = document.getElementById('cliente-nome').value;
  const emailCliente = document.getElementById('cliente-email').value;
  const telefoneCliente = document.getElementById('cliente-telefone').value;
  const enderecoCliente = document.getElementById("cliente-end").value;

  localStorage.setItem('cliente', JSON.stringify({ nome: nomeCliente, email: emailCliente, telefone: telefoneCliente, endereco: enderecoCliente }));
  
  document.getElementById('cliente-resumo').innerHTML = `
      <strong>Cliente:</strong> ${nomeCliente} - ${emailCliente} - ${telefoneCliente} - ${enderecoCliente}
  `;
  
  alert('Cliente cadastrado com sucesso!');
});
// Função para calcular o total dos serviços selecionados
function calcularTotal() {
  let total = 0;
  const servicosSelecionados = document.querySelectorAll('.servico:checked');

  servicosSelecionados.forEach(servico => {
      total += parseFloat(servico.value); // Soma os valores dos serviços selecionados
  });

  // Exibe o valor total na tela
  document.getElementById('valor-total').textContent = total.toFixed(2);
}

// Adiciona um ouvinte de evento para recalcular o total toda vez que uma checkbox for clicada
document.querySelectorAll('.servico').forEach(servico => {
  servico.addEventListener('change', calcularTotal);
});

// Inicia o cálculo com o valor total 0
calcularTotal();



// Função para lidar com o envio do formulário de serviços
document.getElementById('form-servicos').addEventListener('submit', function(event) {
  event.preventDefault();

  const servicosSelecionados = [];
  const checkboxes = document.querySelectorAll('#form-servicos input[type="checkbox"]:checked');
  
  checkboxes.forEach(checkbox => {
      servicosSelecionados.push(checkbox.value);
  });

  localStorage.setItem('servicos', JSON.stringify(servicosSelecionados));
  
  document.getElementById('servicos-resumo').innerHTML = `
      <strong>Serviços Selecionados:</strong> ${servicosSelecionados.join(', ')}
  `;
  
  alert('Serviços selecionados com sucesso!');
});

