const titulo = document.querySelector('h1');
var pacientes = document.querySelectorAll(".paciente");
const botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");

titulo.textContent = 'Aparecida Nutricionista';

pacientes.forEach(paciente => {
  const pacientePeso = paciente.querySelector(".info-peso").textContent;
  const pacienteAltura = paciente.querySelector(".info-altura").textContent;
  const pacienteCampoIMC = paciente.querySelector(".info-imc");

  let pesoValido = validaPeso(pacientePeso);
  let alturaValida = validaAltura(pacienteAltura);

  if (!pesoValido) {
    pesoValido = false;
    pacienteCampoIMC.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaValida) {
    alturaValida = false;
    pacienteCampoIMC.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoValido && alturaValida) {
    const imcCalculado = calculaImc(pacientePeso, pacienteAltura);
    pacienteCampoIMC.textContent = imcCalculado;
  }

});

function calculaImc(peso, altura) {
  return (peso / (altura * altura)).toFixed(2);
}

function validaPeso(pacientePeso) {
  return pacientePeso > 0 && pacientePeso <= 300;
}

function validaAltura(pacienteAltura) {
  return pacienteAltura > 0 && pacienteAltura <= 3.00;
}