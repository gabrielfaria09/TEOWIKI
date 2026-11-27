 async function carregarArtigo() {

      const area = document.getElementById("conteudo-artigo");

      try {

        const resposta = await fetch("../ARTICLES/teologia.md");

        if (!resposta.ok) {
          throw new Error("Não foi possível carregar o artigo.");
        }

        const markdown = await resposta.text();

        const html = marked.parse(markdown);

        area.innerHTML = DOMPurify.sanitize(html);

        // IDs para navegação pelo sumário
        const secoes = {
          "O que é teologia": "definicao",
          "Origem da Teologia": "origem",
          "A Escolástica: A Teologia como Ciência": "escolastica",
          "A Reforma Protestante e a Modernidade": "reforma",
          "Subdivisões da Teologia": "subdivisoes"
        };

        area.querySelectorAll("h2, h3").forEach(titulo => {

          const texto = titulo.textContent.trim();

          if (secoes[texto]) {
            titulo.id = secoes[texto];
          }

        });

      } catch (erro) {

        area.innerHTML = `
          <p class="error-message">
            Não foi possível carregar o artigo. Verifique o arquivo Markdown.
          </p>
        `;

        console.error(erro);
      }
    }

    carregarArtigo();