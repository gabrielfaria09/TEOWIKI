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