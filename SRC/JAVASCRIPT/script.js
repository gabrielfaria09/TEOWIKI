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

//Função que implementa destaque ao aside, conferindo feedback na leitura

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('aside a').forEach(link => 
        link.classList.toggle('ativo', link.hash === `#${entry.target.id}`)
      );
    }
  });
}, { rootMargin: "-10% 0px -70% 0px" });

document.querySelectorAll('article[id]').forEach(artigo => observer.observe(artigo));