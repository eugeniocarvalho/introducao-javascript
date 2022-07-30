const buscarPacienteBotao = document.querySelector("#buscar-pacientes");
const urlPacientes = "https://api-pacientes.herokuapp.com/pacientes";

buscarPacienteBotao.addEventListener("click", event => {
  event.preventDefault();

  console.log("Buscando...");

  const request = new XMLHttpRequest();

  request.open("GET", urlPacientes);

  request.addEventListener("load", function() {
    pacientes = JSON.parse(request.responseText);

    pacientes.forEach(paciente => {
      adicionaPacienteTabela(paciente);
    });
  });

  request.send();

});