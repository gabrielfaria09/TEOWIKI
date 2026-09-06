tema = localStorage.getItem("theme");
const botao = document.getElementById("tema");

if(tema === "dark"){
  document.body.classList.add("dark-mode");
  botao.textContent = "Tema Claro";
}

else{
  botao.textContent = "Tema escuro";
}

botao.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){
    botao.textContent = "Tema Claro";
    localStorage.setItem("theme", "dark");
  }
  else{
    botao.textContent = "Tema escuro";
    localStorage.setItem("theme", "default");
  }
});