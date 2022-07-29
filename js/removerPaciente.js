var pacientes = document.querySelectorAll(".icone-deletar");

pacientes.forEach(paciente => {
  paciente.addEventListener("click", evento => {
    console.log(evento);
    evento.path[2].remove();
  });
});