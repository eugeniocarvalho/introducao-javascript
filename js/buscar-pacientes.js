const buscarPacienteBotao = document.querySelector("#buscar-pacientes");
const urlPacientes = "https://api-pacientes.herokuapp.com/pacientes";
const erroAjax = document.querySelector("#erro-ajax");

buscarPacienteBotao.addEventListener("click", event => {
  event.preventDefault();


  const request = new XMLHttpRequest();

  request.open("GET", urlPacientes);

  request.addEventListener("load", function () {

    if (request.status === 200) {
      erroAjax.classList.add("invisivel");

      pacientes = JSON.parse(request.responseText);

      pacientes.forEach(paciente => {
        adicionaPacienteTabela(paciente);
      });
    }
    else
      erroAjax.classList.remove("invisivel");
  });

  request.send();

});