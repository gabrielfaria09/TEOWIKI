# TEOWIKI 📖

**Sabedoria, transparência e profissionalismo**

TEOWIKI é um projeto web criado para o compartilhamento de estudos sobre teologia e filosofia. Desenvolvido com o intuito de apresentar artigos claros e diretos, o site busca inspirar os leitores a refletirem sobre a relação entre a razão e a fé, explorando questões fundamentais da vida e do propósito.

## 🚀 Funcionalidades

* **Conteúdo Rico:** Múltiplas páginas contendo artigos detalhados sobre o que é teologia, suas aplicações ao longo da história e a importância dos centros religiosos e de estudo.
* **Modo Escuro (Dark Mode):** Alternância fluida entre temas claros e escuros para melhor conforto visual, controlada via JavaScript.
* **Barra de Progresso de Leitura:** Uma barra de progresso no topo da página que acompanha a rolagem do usuário em tempo real.
* **Navegação Interativa (Spy Scroll):** Menu lateral (aside) nos artigos que destaca automaticamente a seção que está sendo lida.
* **Design Responsivo:** Interface projetada para se adaptar perfeitamente a diferentes tamanhos de tela (desktop, tablets e smartphones).

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica de múltiplas páginas do site (`index.html`, artigos e serviços).
* **CSS3:** Estilização customizada com gradientes, layout responsivo via Media Queries, efeitos visuais interativos e implementação do tema escuro.
* **JavaScript (ES6):**
  * `scroll.js`: Lógica para cálculo dinâmico da porcentagem de rolagem da página.
  * `mudarTema.js`: Manipulação do DOM para alternância da classe do tema escuro no `body`.
  * `destaqueAside.js`: Uso moderno de `IntersectionObserver` para destacar links do sumário conforme a leitura.

## 📂 Estrutura de Diretórios e Arquivos

```text
📦 TEOWIKI
├── index.html                   # Página principal (Sobre Mim, Missão, Serviços)
└── SRC/
    ├── CSS/
    │   └── style.css            # Estilização global da aplicação
    ├── JAVASCRIPT/
    │   ├── destaqueAside.js     # Script do menu interativo
    │   ├── mudarTema.js         # Script de alternância de tema
    │   └── scroll.js            # Script do indicador de rolagem
    ├── PAGES/
    │   ├── Aplicações.html      # Artigo: Aplicações da Teologia
    │   ├── Centrosreligiosos.html # Artigo: Centros Religiosos e de Estudo
    │   ├── Serviços.html        # Hub central dos trabalhos e artigos
    │   └── Teologia.html        # Artigo: O que é teologia
    └── ASSETS/
        └── Images/              # Recursos visuais, logos e ilustrações
```

## 📞 Contato e Autoria

Projeto idealizado e desenvolvido por **Gabriel Alves Faria**, estudante de desenvolvimento de sistemas apaixonado por teologia e filosofia.

*Nota: Os conteúdos usados para redigir os artigos e algumas imagens tiveram auxílio de Inteligência Artificial. Todos os direitos reservados © 2026.*
