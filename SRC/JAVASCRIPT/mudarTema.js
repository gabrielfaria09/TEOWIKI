const botao = document.getElementById("tema");

botao.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){
    botao.textContent = "Tema Claro";
  }
  else{
    botao.textContent = "Tema escuro";
  }
});