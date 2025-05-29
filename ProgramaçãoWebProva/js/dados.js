//ProgramaçãoWebProva/js/dados.js

//Array inicial de livros.
//Em uma aplicação real, esses dados viriam de um servidor (backend)
//ou seriam lidos de um arquivo de configuração (como JSON).
let books = [
    {
        id: 1, //Identificador único para cada livro
        title: "The Lord of the Rings", //Título do livro
        author: "J.R.R. Tolkien", //Autor do livro
        genre: "Fantasy" //Gênero do livro
    },
    {
        id: 2,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance"
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian"
    },
    {
        id: 4,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction"
    },
    {
        id: 5,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic"
    }
];

//Função para gerar o próximo ID para um novo livro.
//Isso garante que cada livro tenha um ID único.
//É uma solução simples para quando não temos um banco de dados cuidando disso.
function getNextId() {
    //Verifica se a lista de livros está vazia.
    if (books.length === 0) {
        return 1; //Se estiver vazia, o primeiro livro terá ID 1.
    }
    //Se não estiver vazia, encontra o maior ID existente e adiciona 1.
    //O '...' (spread operator) transforma o array de IDs em argumentos para Math.max.
    return Math.max(...books.map(book => book.id)) + 1;
} 