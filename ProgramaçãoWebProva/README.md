# Biblioteca Online

Este é um projeto de uma aplicação web estática que simula um sistema de gerenciamento de biblioteca. O foco principal é o front-end, utilizando HTML, CSS e JavaScript puro.

## Funcionalidades

*   **Login Fictício:** Acesso ao sistema com usuário "admin" e senha "123". Mensagens de erro são exibidas para credenciais inválidas.
*   **Gerenciamento de Livros:**
    *   Visualização da lista de livros.
    *   Adição de novos livros.
    *   Remoção de livros existentes.
    *   Busca/filtragem de livros por título, autor ou gênero.
*   **Dados Locais:** Os dados dos livros são armazenados em um array JavaScript.
*   **Layout Responsivo:** A interface se adapta a diferentes tamanhos de tela (mobile e desktop).

## Tecnologias Utilizadas

*   HTML5
*   CSS3 (Flexbox/Grid para layout)
*   JavaScript (ES6+)

## Como Rodar o Projeto

1.  Clone este repositório ou baixe os arquivos.
2.  Abra o arquivo `ProgramaçãoWebProva/index.html` em seu navegador web.

## Estrutura do Projeto

```
ProgramaçãoWebProva/
├── css/
│   ├── style.css       # Estilos globais e da página inicial
│   ├── login.css       # Estilos da página de login
│   └── livros.css      # Estilos da página de livros
├── js/
│   ├── dados.js        # Contém o array inicial de livros
│   ├── login.js        # Lógica de autenticação
│   └── livros.js       # Lógica de gerenciamento de livros (CRUD e busca)
├── index.html          # Página inicial
├── login.html          # Página de login
├── livros.html         # Página principal do sistema (gerenciamento de livros)
└── README.md           # Este arquivo
``` 