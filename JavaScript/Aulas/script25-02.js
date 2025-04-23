document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const lista = document.getElementById("lista");

    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        //Captura os valores do formulario
        const descricao = document.getElementById("descricao").value;
        const quantidade = document.getElementById("quantidade").value;
        const valor = document.getElementById("valor").value;
        //Cria o elemento lista
        const item = document.createElement("li");
        item.innerHTML = `${descricao} - ${quantidade} x R$ ${valor}
            <button class="delete">Excluir</button>`;

        //Adiciona o item à lista
        lista.appendChild(item);

        //Evento para excluir o item
        item.querySelector(".delete").addEventListener("click", function() {
            lista.removeChild(item);
        });

        //Limpa o formulario
        formulario.reset();
    })
}); 