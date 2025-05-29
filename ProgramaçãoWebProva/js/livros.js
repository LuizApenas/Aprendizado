//ProgramaçãoWebProva/js/livros.js

//Garante que o script só será executado após o carregamento completo do HTML.
document.addEventListener('DOMContentLoaded', () => {
    //CONTROLE DE ACESSO:
    //Verifica no 'sessionStorage' se o item 'loggedIn' está como 'true'.
    //Se não estiver, significa que o usuário não passou pela tela de login.
    if (sessionStorage.getItem('loggedIn') !== 'true') {
        //Redireciona o usuário de volta para a página de login.
        window.location.href = 'login.html';
        return; //Para a execução do script aqui, pois o usuário não está autenticado.
    }

    //SELEÇÃO DE ELEMENTOS DO DOM (HTML):
    //Guardamos referências a elementos importantes do HTML em variáveis para fácil acesso.
    const bookListElement = document.getElementById('bookList'); //Onde a lista de livros será exibida.
    const searchInput = document.getElementById('searchInput'); //Campo de busca.
    const addBookModalButton = document.getElementById('addBookModalButton'); //Botão para abrir o formulário de adicionar livro.
    const addBookModal = document.getElementById('addBookModal'); //O modal (janela flutuante) do formulário.
    const closeButton = document.querySelector('.close-button'); //Botão de fechar o modal.
    const addBookForm = document.getElementById('addBookForm'); //O formulário para adicionar novo livro.
    const logoutButton = document.getElementById('logoutButton'); //Botão de sair.

    //FUNÇÃO PARA RENDERIZAR (EXIBIR) OS LIVROS NA TELA:
    //O parâmetro 'filteredBooks' permite que a função exiba todos os livros ou uma lista filtrada.
    //Por padrão (se nada for passado), usa a lista completa 'books' (do arquivo dados.js).
    function renderBooks(filteredBooks = books) {
        bookListElement.innerHTML = ''; //Limpa qualquer conteúdo anterior da lista de livros.

        //Verifica se a lista de livros (filtrada ou não) está vazia.
        if (filteredBooks.length === 0) {
            bookListElement.innerHTML = '<p>Nenhum livro encontrado.</p>'; //Exibe uma mensagem se não houver livros.
            return; //Sai da função, pois não há mais nada a fazer.
        }

        //Para cada livro na lista 'filteredBooks':
        filteredBooks.forEach(book => {
            const bookItem = document.createElement('div'); //Cria um novo elemento <div> para o livro.
            bookItem.classList.add('book-item'); //Adiciona a classe CSS 'book-item' para estilização.
            
            //Define o conteúdo HTML interno do 'bookItem'.
            //Usamos template literals (crases ``) para inserir os dados do livro facilmente.
            bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Autor:</strong> ${book.author}</p>
                <p><strong>Gênero:</strong> ${book.genre}</p>
                <button class="remove-btn" data-id="${book.id}">Remover</button>
            `;
            //'data-id' é um atributo de dados personalizado, usado para guardar o ID do livro no botão.
            
            bookListElement.appendChild(bookItem); //Adiciona o 'bookItem' criado à lista no HTML.
        });

        //Após (re)renderizar os livros, é crucial adicionar os ouvintes aos botões de "Remover".
        //Isso é feito aqui porque os botões são recriados toda vez que a lista é atualizada.
        addRemoveButtonListeners();
    }

    //FUNÇÃO PARA FILTRAR OS LIVROS (BUSCA):
    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase(); //Pega o termo da busca e converte para minúsculas.
        //Filtra o array 'books' original.
        const filteredBooks = books.filter(book =>
            //Verifica se o título, autor ou gênero (convertidos para minúsculas) incluem o termo da busca.
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm)
        );
        renderBooks(filteredBooks); //Chama renderBooks para exibir apenas os livros filtrados.
    }

    //FUNÇÃO PARA ADICIONAR UM NOVO LIVRO:
    function addBook(event) {
        event.preventDefault(); //Impede o envio padrão do formulário.
        //Pega os valores dos campos do formulário de adicionar livro.
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const genre = document.getElementById('genre').value;

        //Validação simples: verifica se todos os campos foram preenchidos.
        if (title && author && genre) {
            const newBook = {
                id: getNextId(), //Usa a função de 'dados.js' para gerar um novo ID.
                title: title,
                author: author,
                genre: genre
            };
            books.push(newBook); //Adiciona o novo livro ao array 'books' (que está em dados.js).
            renderBooks(); //Re-renderiza a lista de livros para incluir o novo.
            closeModal(); //Fecha o modal de adição.
            addBookForm.reset(); //Limpa os campos do formulário.
        } else {
            alert('Por favor, preencha todos os campos.'); //Alerta se algum campo estiver vazio.
        }
    }

    //FUNÇÃO PARA REMOVER UM LIVRO:
    function removeBook(bookId) {
        //Pede confirmação ao usuário antes de remover.
        if (!confirm('Tem certeza que deseja remover este livro?')) {
            return; //Se o usuário cancelar, a função para aqui.
        }
        //Filtra o array 'books', mantendo apenas os livros cujo ID é DIFERENTE do bookId a ser removido.
        //Isso efetivamente remove o livro do array.
        books = books.filter(book => book.id !== bookId);
        renderBooks(); //Re-renderiza a lista de livros para refletir a remoção.
    }

    //FUNÇÃO PARA ABRIR O MODAL DE ADICIONAR LIVRO:
    function openModal() {
        addBookModal.style.display = 'block'; //Muda o estilo CSS do modal para 'block' para torná-lo visível.
    }

    //FUNÇÃO PARA FECHAR O MODAL:
    function closeModal() {
        addBookModal.style.display = 'none'; //Muda o estilo CSS do modal para 'none' para escondê-lo.
    }

    //FUNÇÃO PARA ADICIONAR OUVINTES DE EVENTO AOS BOTÕES DE REMOVER:
    //Esta função é chamada sempre que a lista de livros é renderizada.
    function addRemoveButtonListeners() {
        //Seleciona TODOS os botões com a classe 'remove-btn'.
        const removeButtons = document.querySelectorAll('.remove-btn');
        //Para cada botão encontrado:
        removeButtons.forEach(button => {
            //Adiciona um ouvinte para o evento de 'click'.
            button.addEventListener('click', function() {
                //'this' dentro desta função refere-se ao botão que foi clicado.
                //'this.dataset.id' pega o valor do atributo 'data-id' que definimos no HTML do botão.
                const bookId = parseInt(this.dataset.id); //Converte o ID (que é string) para número.
                removeBook(bookId); //Chama a função para remover o livro com o ID obtido.
            });
        });
    }
    
    //FUNÇÃO PARA REALIZAR O LOGOUT:
    function handleLogout() {
        sessionStorage.removeItem('loggedIn'); //Remove o indicador de login do sessionStorage.
        window.location.href = 'index.html'; //Redireciona para a página inicial.
    }


    //CONFIGURAÇÃO INICIAL E ADIÇÃO DOS PRINCIPAIS OUVINTES DE EVENTO:
    //Só adiciona os ouvintes se os elementos existirem na página.

    if (searchInput) {
        //Quando o usuário digita no campo de busca ('input'), chama handleSearch.
        searchInput.addEventListener('input', handleSearch);
    }

    if (addBookModalButton) {
        //Quando o botão de "Adicionar Livro" é clicado, chama openModal.
        addBookModalButton.addEventListener('click', openModal);
    }

    if (closeButton) {
        //Quando o botão de fechar (X) do modal é clicado, chama closeModal.
        closeButton.addEventListener('click', closeModal);
    }

    //Permite fechar o modal clicando fora da área de conteúdo do modal.
    window.addEventListener('click', (event) => {
        //Se o alvo do clique (event.target) for o próprio fundo do modal...
        if (event.target === addBookModal) {
            closeModal(); //...fecha o modal.
        }
    });

    if (addBookForm) {
        //Quando o formulário de adicionar livro é enviado ('submit'), chama addBook.
        addBookForm.addEventListener('submit', addBook);
    }

    if (logoutButton) {
        //Quando o botão de "Sair" é clicado, chama handleLogout.
        logoutButton.addEventListener('click', handleLogout);
    }

    //RENDERIZAÇÃO INICIAL DOS LIVROS:
    //Chama a função renderBooks() uma vez quando a página carrega para exibir os livros iniciais.
    renderBooks();
}); 