# Ink & Code Portfolio

Crie um portfólio profissional completo para Caio Santos Borges (Desenvolvedor de Software / UI/UX & Front-End), com a identidade visual de 'Arte → Design → Código → Software' e animação de tinta controlada estritamente pela rolagem (scroll-driven / GSAP ScrollTrigger com scrub).

Siga rigorosamente as 8 etapas do storyboard fornecido na imagem anexada (uploads/31283d2a-fb22-48fe-8a33-158d0052d985):
1. Hero minimalista quase preto com navbar (logo CB, links suaves, botão de tema/menu), tipografia moderna ("CAIO BORGES", "UI/UX Designer & Front End Developer", frase conceitual) e indicador de scroll.
2. Animação de gota de tinta caindo conforme a rolagem avança, colidindo e gerando splash com partículas secundárias ("IDEIAS TAMBÉM DEIXAM MARCAS").
3. A tinta se espalha pelo fundo em tons artísticos sutis (azul petróleo, coral queimado, bege/off-white) revelando a frase "EU DESENHO EXPERIÊNCIAS. DO CONCEITO À REALIDADE.".
4. Surgem sketches manuais, anotações de design e wireframes sobre as manchas ("DESIGN É ONDE TUDO COMEÇA.").
5. Transição da arte para o código: surge o snippet interativo `const idea = create(); const design = iterate(idea); const experience = build(design); // design + code = possibilities` ("E EU CONSTRUO O QUE DESENHO.").
6. O código se transforma em blueprint/interface wireframe ("IDEIAS VIRAM PRODUTOS.").
7. A interface se torna real e polida com preview de projetos em destaque ("Projetos que geram resultado").
8. Condução fluida para o perfil pessoal ("Olá, eu sou CAIO BORGES" com foto estilizada com bordas de pincelada/tinta e botões "Ver projetos" e "Falar comigo").

Em seguida, estruture todas as seções completas do portfólio em fluxo contínuo e responsivo:
- Navbar fixa/blur com navegação suave para: Sobre, Projetos, Experiência, Habilidades, Formação, Certificados, Contato.
- Sobre mim: lado artístico e humano (música, tocar instrumentos, desenho, pintura, animais), foto pessoal com acabamento artístico e texto autoral.
- Projetos: cards interativos ricos com preview, título, descrição, tags de tecnologia, botões "Ver projeto" e "GitHub", microinterações elegantes.
- Experiência: timeline moderna onde o traço de pincel se transforma progressivamente em linha técnica geométrica.
- Habilidades: categorizadas (Back-end: Java, Spring Boot, APIs REST, JPA/Hibernate, SQL; Front-end: JavaScript, React, HTML, CSS; Ferramentas/Outros: Git, Python, etc.) sem barras de porcentagem clichês, usando tags e cards refinados.
- Formação acadêmica: Engenharia de Software na PUC Minas, período e detalhes.
- Certificados: grid moderno de certificados com visualizador/modal e links.
- Contato ("Vamos criar algo?"): formulário completo (Nome, E-mail, Mensagem), links sociais (GitHub, LinkedIn, Email) e encerramento visual com pincelada final formando a assinatura/monograma 'CB'.

Requisitos técnicos e de design:
- Separe os dados em arquivos estruturados em `src/data/portfolioData.ts` para fácil edição.
- Paleta: fundo predominantemente escuro (#0a0a0c, off-black), detalhes em off-white, cinzas neutros e toques de tinta em azul petróleo (#1b4965), coral/laranja queimado (#d0533b), azul suave e bege.
- GSAP + ScrollTrigger ou Canvas/SVG performáticos com suporte a prefers-reduced-motion e compatibilidade total mobile/tablet/desktop.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/14ab0edb-52fe-4f4d-8d94-e997b9bb3f91).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
