const campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    pacientes.forEach(paciente => {
      const tdNome = paciente.querySelector(".info-nome").textContent.toLowerCase();
      
      if (!tdNome.includes(this.value.toLowerCase()))
        paciente.classList.add("invisivel");
      else
        paciente.classList.remove("invisivel");

    });
  }
  else {
    pacientes.forEach(paciente => {
      paciente.classList.remove("invisivel");
    })
  }
});