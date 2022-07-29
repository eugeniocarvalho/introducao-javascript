var pacientes = document.querySelectorAll(".icone-deletar");
const tabela = document.querySelector("table");


tabela.addEventListener("click", function(event){
  if(event.path[0].className.includes("fa-trash-can"))
    event.path[2].remove();
}) ;