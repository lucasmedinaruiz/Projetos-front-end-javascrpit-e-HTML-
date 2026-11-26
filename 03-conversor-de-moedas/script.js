// Cotações fictícias (quanto vale 1 unidade da moeda em reais)
const cotacoes = {
  USD: 5.50,
  EUR: 6.00,
  GBP: 7.00
};

function converter() {
  const valor = parseFloat(document.getElementById("valor").value);
  const moeda = document.getElementById("moeda").value;
  const resultado = document.getElementById("resultado");

  if (isNaN(valor) || valor < 0) {
    resultado.textContent = "Digite um valor válido.";
    return;
  }

  const convertido = valor / cotacoes[moeda];
  resultado.textContent = `R$ ${valor.toFixed(2)} = ${convertido.toFixed(2)} ${moeda}`;
}

document.getElementById("converter").addEventListener("click", converter);
