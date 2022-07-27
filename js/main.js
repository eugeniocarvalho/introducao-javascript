const titulo = document.querySelector('h1');
titulo.textContent = 'Aparecida Nutricionista';

const pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
  const pacientePeso = paciente.querySelector(".info-peso").textContent;
  const pacienteAltura = paciente.querySelector(".info-altura").textContent;
  const pacienteCampoIMC = paciente.querySelector(".info-imc");
  
  let pesoValido = true;
  let alturavalida = true;
  
  if (pacientePeso <= 0 || pacientePeso >= 1000) {
    pesoValido = false;
    pacienteCampoIMC.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  }
  
  if (pacienteAltura <= 0 || pacienteAltura >= 3.00) {
    alturavalida = false;
    pacienteCampoIMC.textContent = "Altura inválida!";
    paciente.style.backgroundColor = "#F37878";
  }
  
  if (pesoValido && alturavalida) {
    const imcCalculado = (pacientePeso / (pacienteAltura * pacienteAltura)).toFixed(4);
    pacienteCampoIMC.textContent = imcCalculado;
  }

});