// Exemplo 1: Estrutura condicional if

let idade = 20;

if (idade >= 18) {

    console.log("Você é maior de idade.");

}



// Exemplo 2: Estrutura condicional if...else

let temperatura = 30;


if (temperatura > 25) {

    console.log("Está quente hoje!");

} else {

    console.log("O tempo está agradável.");

}



// Exemplo 3: Estrutura condicional if...else if...else

let nota = 85; // Você pode alterar este valor para testar diferentes saídas

    

    // Seleciona o parágrafo onde o resultado será exibido

let resultado = document.getElementById("resultado");



if (nota >= 90) {

    console.log("Você tirou um A!");

    resultado.innerHTML = "Você tirou um A!";

} else if (nota >= 70) {

    console.log("Você tirou um B.");

    resultado.innerHTML = "Você tirou um B.";

} else if (nota >= 50) {

    console.log("Você tirou um C.");

    resultado.innerHTML = "Você tirou um C.";

} else {

    console.log("Você foi reprovado.");

    resultado.innerHTML = "Você foi reprovado.";

}

