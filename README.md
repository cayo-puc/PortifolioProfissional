# Portfólio — Caio Santos Borges

Portfólio profissional desenvolvido para apresentar minha trajetória como estudante de **Engenharia de Software e Desenvolvedor de Software**, reunindo projetos, experiências, habilidades, formação acadêmica e certificações em uma interface moderna e interativa.

O projeto combina **desenvolvimento e identidade visual**, utilizando animações, elementos inspirados em tinta e arte e diferentes interações para criar uma experiência que represente tanto meu perfil técnico quanto meus interesses criativos.

---

## Sobre mim

Sou estudante de **Engenharia de Software na PUC Minas** e desenvolvedor de software com experiência prática em aplicações web, APIs REST e projetos full stack.

Tenho contato com tecnologias como **Java, Spring Boot, Python, React, TypeScript, SQL e Git**, além de atuar como **Monitor de Programação Modular na PUC Minas**, auxiliando estudantes em Java, Programação Orientada a Objetos, testes, depuração e desenvolvimento de projetos.

Fora da programação, tenho interesse por música, instrumentos, desenho, pintura e animais. Essa relação entre tecnologia e criatividade também influenciou a identidade visual deste portfólio.

---

## Conceito do portfólio

A proposta visual do projeto parte da relação entre:

**Arte → Design → Código → Software**

Elementos como tinta, formas orgânicas, movimento e composição visual são utilizados ao longo da interface para representar o processo de transformar uma ideia em um produto digital.

O objetivo foi criar um portfólio profissional que não funcionasse apenas como uma lista de projetos, mas também transmitisse um pouco da minha personalidade e da forma como gosto de desenvolver software.

---

## Tecnologias utilizadas

### Front-end

- React
- TypeScript
- Vite
- Tailwind CSS

### Interface e animações

- Lucide React
- Componentes de interface reutilizáveis
- Animações e transições em CSS
- Design responsivo
- Tema claro e escuro

### Desenvolvimento

- Git
- GitHub
- npm
- ESLint

---

## Seções

O portfólio é organizado nas seguintes áreas:

- **Sobre mim** — apresentação pessoal, interesses e perfil profissional.
- **Projetos** — principais projetos desenvolvidos, tecnologias utilizadas e detalhes de implementação.
- **Experiência** — experiência como Monitor de Programação Modular na PUC Minas.
- **Habilidades** — tecnologias e ferramentas organizadas por área.
- **Formação acadêmica** — graduação em Engenharia de Software.
- **Certificados** — formações e certificações complementares.
- **Contato** — GitHub, LinkedIn, e-mail e formulário de contato.

---

## Projetos apresentados

### Nutri-Soft

Sistema web desenvolvido em equipe para apoiar o acompanhamento nutricional de pacientes.

Entre as funcionalidades estão gerenciamento de pacientes, formulários clínicos, dietas, exames, consultas, agendamentos, acompanhamento da evolução e geração de relatórios.

Minhas principais contribuições envolveram:

- Arquitetura dos formulários
- Design da aplicação
- Front-end com Thymeleaf
- Assistente virtual
- Sistema de agendamentos
- Deploy da aplicação

**Tecnologias:** Java, Spring Boot, Thymeleaf, MySQL, HTML, CSS e JavaScript.

Repositório:  
https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2026-1-ti3-5533100-g6-nutri-soft

---

### Portfólio Interativo

Portfólio gamificado desenvolvido para transformar a navegação tradicional de um site em uma experiência 2D interativa.

O visitante controla um personagem e pode explorar diferentes cenários para acessar projetos, experiências, informações pessoais e formas de contato.

O projeto possui:

- Movimentação do personagem
- Movimentação em profundidade
- Física de salto e gravidade
- Detecção de colisões
- Interação com objetos
- Sprites animados
- Navegação entre cenários

**Tecnologias:** React, Vite, JavaScript, HTML e CSS.

Repositório:  
https://github.com/cayo-puc/Portifolio

---

### Pipeline de Dados em Python

Pipeline reutilizável desenvolvido em Python para integrar dados provenientes de diferentes fontes.

O projeto trabalha com arquivos **JSON e CSV**, realizando leitura, transformação, padronização das estruturas e consolidação dos dados.

O objetivo foi aplicar conceitos relacionados a **ETL e pipelines de dados**, criando uma estrutura que pudesse ser reutilizada em diferentes cenários.

**Tecnologias:** Python, ETL, JSON e CSV.

Repositório:  
https://github.com/cayo-puc/Pipeline_python

---

### API Voll Med

API REST desenvolvida com Java e Spring Boot para gerenciamento de médicos.

Entre as funcionalidades implementadas estão:

- Cadastro de médicos
- Consulta paginada
- Atualização de registros
- Exclusão lógica
- Listagem de médicos ativos

A aplicação utiliza DTOs para transferência de dados e uma estrutura organizada em camadas.

**Tecnologias:** Java, Spring Boot, Spring Data JPA, Hibernate, MySQL e Maven.

Repositório:  
https://github.com/cayo-puc/ApiVollMed

---

## Identidade visual

O portfólio utiliza uma estética escura combinada com tons de azul/ciano e coral.

A interface utiliza elementos inspirados em:

- Tinta
- Pintura
- Formas orgânicas
- Música
- Design
- Desenvolvimento de software

Uma das interações presentes na seção **Sobre mim** utiliza um disco de vinil animado, reforçando a relação entre meus interesses pessoais e a identidade do projeto.

---

## Temas

A aplicação possui suporte aos modos:

- 🌙 Dark
- ☀️ Light

As cores são controladas por variáveis CSS e integradas ao sistema de design utilizado pelo Tailwind CSS.

---

## Responsividade

O projeto foi desenvolvido pensando em diferentes tamanhos de tela.

A interface se adapta para:

- Desktop
- Notebook
- Tablet
- Dispositivos móveis

Também foram consideradas preferências de acessibilidade relacionadas à redução de movimento.

---

## Como executar o projeto

### Pré-requisitos

Tenha instalado:

- Node.js
- npm
- Git

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entre na pasta

```bash
cd NOME_DO_REPOSITORIO
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o ambiente de desenvolvimento

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação, normalmente:

```text
http://localhost:5173
```

---

## Estrutura do projeto

Uma visão simplificada da organização:

```text
src/
├── assets/
├── components/
│   ├── portfolio/
│   └── ui/
├── data/
├── hooks/
├── lib/
└── ...
```

Os dados utilizados pelo portfólio são separados dos componentes visuais, facilitando a manutenção das informações de projetos, experiências, habilidades e certificados.

---

## Melhorias futuras

Algumas melhorias que podem ser adicionadas ao projeto:

- Galeria de imagens para os projetos
- Novas animações e interações
- Demonstrações online dos projetos
- Novos projetos e experiências
- Melhorias contínuas de acessibilidade
- Otimizações de performance

---

## Contato

**Caio Santos Borges**  
Desenvolvedor de Software  
Engenharia de Software — PUC Minas  
Belo Horizonte, MG — Brasil

E-mail:  
caio.santos.software@gmail.com

LinkedIn:  
https://www.linkedin.com/in/caio-santos-borges-792591362/

GitHub:  
https://github.com/cayo-puc

---

## Licença

Este projeto foi desenvolvido como portfólio pessoal.

O código pode ser utilizado como referência para estudos e aprendizado. O conteúdo pessoal, identidade visual, textos e informações apresentadas pertencem ao autor.

---

<p align="center">
  Desenvolvido por <strong>Caio Santos Borges</strong>
</p>
