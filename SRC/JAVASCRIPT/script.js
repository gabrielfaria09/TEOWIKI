/*Função que implementa rolagem responsiva*/

const barraScroll =  document.getElementById("RealProgress");


function rolagem(){
    const scrollAtual = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const porcentagem = (scrollAtual / maxScroll) * 100;

   barraScroll.style.width = porcentagem + "%"; 
   console.log(porcentagem);
}

window.addEventListener('scroll', rolagem);