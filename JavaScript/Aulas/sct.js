document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const lista = document.getElementById('lista');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o recarregamento da página

        const descricao = document.getElementById('descricao').value;
        const quantidade = document.getElementById('quantidade').value;
        const valor = document.getElementById('valor').value;

        // Criar um novo item da lista
        const item = document.createElement('li');
        item.textContent = `${descricao} - ${quantidade} x R$ ${valor} `;

        // Criar o botão de deletar
        const botaoDelete = document.createElement('button');
        botaoDelete.textContent = 'Excluir';
        botaoDelete.classList.add('delete');

        // Adicionar o botão ao item
        item.appendChild(botaoDelete);
        lista.appendChild(item);

        // Adicionar evento de clique ao botão de excluir
        botaoDelete.addEventListener('click', function() {
            lista.removeChild(item);
        });

        // Limpar os campos do formulário
        formulario.reset();
    });
});
