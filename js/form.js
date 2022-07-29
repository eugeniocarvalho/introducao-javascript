botaoAdicionarPaciente.addEventListener("click", event => {
  event.preventDefault();

  const formularioAdicionaPaciente = document.querySelector("#form-adiciona");
  const pacienteDados = obtemPacienteDoForm(formularioAdicionaPaciente);
  const tabelaPacientes = document.querySelector("#tabela-pacientes");
  let pacienteTr = document.createElement("tr");
  let mensagensErro = validaPaciente(pacienteDados);
  pacienteTr = montaTr(pacienteDados);

  if (mensagensErro.length > 0) {
    exibeErros(mensagensErro);
    
    return;
  }
  else {
    tabelaPacientes.appendChild(pacienteTr);
    formularioAdicionaPaciente.reset();
    atualizaErros();
  }
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
  pacienteTr.appendChild(montaIcone("fa-solid fa-pencil", "icone-editar"));
  pacienteTr.appendChild(montaIcone("fa-regular fa-trash-can", "icone-deletar"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  const td = document.createElement("td");

  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function montaIcone(icone, classe) {
  const i = document.createElement("i");
  const td = document.createElement("td");

  i.classList.add(icone.split(" ")[0], icone.split(" ")[1]);
  td.classList.add(classe);
  td.appendChild(i);

  return td;
}

function validaPaciente(paciente) {
  const erros = [];

  if (paciente.nome.length === 0) erros.push("Campo nome vazio!");

  if (!validaPeso(paciente.peso)) erros.push("Peso inválido!");
  
  if (!validaAltura(paciente.altura)) erros.push("Altura inválida!");

  if (paciente.gordura.length === 0) erros.push("Campo gordura vazio!");

  return erros;
}

function exibeErros(listaErros) {
  const elementoUl = document.querySelector("#mensagens-erro");
  
  atualizaErros();

  listaErros.forEach(erro => {
    const elementoLi = document.createElement("li");
    
    elementoLi.textContent = erro;
    elementoLi.classList.add("item-erro");
    elementoUl.appendChild(elementoLi);
  });
}

function atualizaErros() {
  const elementoUl = document.querySelector("#mensagens-erro");
  elementoUl.innerHTML = "";
}