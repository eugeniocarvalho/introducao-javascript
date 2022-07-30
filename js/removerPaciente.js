var pacientes = document.querySelectorAll(".icone-deletar");
const tabela = document.querySelector("table");


tabela.addEventListener("click", function(event){
  console.log(event.target.className);
  if(event.target.className.includes("fa-trash-can")) {
    event.target.parentNode.parentNode.classList.add("fadeOut");

    setTimeout(() => {
      event.target.parentNode.parentNode.remove();

    }, 500);
  }
});