document.addEventListener("DOMContentLoaded", function(){
    const resultado = document.getElementById("resultado");
    
    const numeroUsuario = prompt("Digite um número:");
    
    const numero = Number(numeroUsuario);
    
    if (isNaN(numero)){
        resultado.innerHTML = "Por favor, digite um número válido";
        console.log("Entrada inválida: não é um número");
    }
    else if (numero % 2 === 0){
        resultado.innerHTML = "O número " + numero + " é par";
        console.log("O número " + numero + " é par");
    } else {
        resultado.innerHTML = "O número " + numero + " é ímpar";
        console.log("O número " + numero + " é ímpar");
    }
});
