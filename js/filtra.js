const campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    pacientes.forEach(paciente => {
      const tdNome = paciente.querySelector(".info-nome").textContent;
      const expressao = new RegExp(this.value, "i");

      if (!expressao.test(tdNome))
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