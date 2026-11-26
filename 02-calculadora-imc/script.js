// Calcula o IMC = peso / (altura * altura) e mostra a classificação.
function classificar(imc) {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 25) return "Peso normal";
  if (imc < 30) return "Sobrepeso";
  return "Obesidade";
}

function calcular() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultado.textContent = "Informe valores válidos.";
    return;
  }

  const imc = peso / (altura * altura);
  resultado.textContent = `IMC: ${imc.toFixed(1)} - ${classificar(imc)}`;
}

document.getElementById("calcular").addEventListener("click", calcular);
