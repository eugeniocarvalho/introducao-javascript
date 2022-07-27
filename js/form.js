botaoAdicionarPaciente.addEventListener("click", event => {
  event.preventDefault();

  const formularioAdicionaPaciente = document.querySelector("#form-adiciona");
  const pacienteDados = obtemPacienteDoForm(formularioAdicionaPaciente);
  const tabelaPacientes = document.querySelector("#tabela-pacientes");
  let pacienteTr = document.createElement("tr");

  pacienteTr = montaTr(pacienteDados);

  tabelaPacientes.appendChild(pacienteTr);

  formularioAdicionaPaciente.reset();
});

function obtemPacienteDoForm(form) {
  paciente = {
    nome: form["nome"].value,
    peso: form["peso"].value,
    altura: form["altura"].value,
    gordura: form["gordura"].value,
    imc: calculaImc(form["peso"].value, form["altura"].value),
  };

  return paciente;
}

function montaTr(paciente) {
  const pacienteTr = document.createElement("tr");

  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente["nome"], "info-nome"));
  pacienteTr.appendChild(montaTd(paciente["peso"], "info-peso"));
  pacienteTr.appendChild(montaTd(paciente["altura"], "info-altura"));
  pacienteTr.appendChild(montaTd(paciente["gordura"], "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente["imc"], "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  const td = document.createElement("td");

  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
