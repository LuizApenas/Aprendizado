//ProgramaçãoWebProva/js/login.js

//Este evento espera que todo o HTML da página seja carregado antes de executar o código JavaScript.
//É uma boa prática para garantir que todos os elementos do HTML estejam disponíveis.
document.addEventListener('DOMContentLoaded', () => {
    //Busca o formulário de login no HTML pelo seu ID 'loginForm'.
    const loginForm = document.getElementById('loginForm');
    //Busca o parágrafo onde as mensagens de erro serão exibidas, pelo ID 'errorMessage'.
    const errorMessage = document.getElementById('errorMessage');

    //Verifica se o elemento 'loginForm' realmente foi encontrado na página.
    //Isso evita erros caso o script seja usado em uma página sem esse formulário.
    if (loginForm) {
        //Adiciona um "ouvinte de evento" ao formulário.
        //Este ouvinte vai "escutar" pelo evento de 'submit' (envio do formulário).
        loginForm.addEventListener('submit', function(event) {
            //event.preventDefault() impede o comportamento padrão do navegador ao enviar um formulário,
            //que normalmente seria recarregar a página ou enviar os dados para um servidor.
            //Aqui, queremos controlar o envio com JavaScript.
            event.preventDefault();

            //Pega o valor digitado no campo de usuário (ID 'username').
            const username = document.getElementById('username').value;
            //Pega o valor digitado no campo de senha (ID 'password').
            const password = document.getElementById('password').value;

            //Lógica de autenticação SIMULADA (login fictício).
            //Verifica se o usuário é 'admin' E a senha é '123'.
            if (username === 'admin' && password === '123') {
                //Se as credenciais estiverem corretas:
                //1. sessionStorage: É um armazenamento temporário do navegador.
                //   Guarda dados enquanto a aba do navegador estiver aberta.
                //   Aqui, guardamos 'loggedIn' como 'true' para indicar que o usuário está logado.
                sessionStorage.setItem('loggedIn', 'true');
                
                //2. Redireciona o usuário para a página 'livros.html'.
                window.location.href = 'livros.html';
            } else {
                //Se as credenciais estiverem incorretas:
                //Exibe uma mensagem de erro no parágrafo 'errorMessage'.
                errorMessage.textContent = 'Usuário ou senha inválidos.';
                //Limpa o campo de senha para que o usuário possa tentar novamente.
                document.getElementById('password').value = '';
            }
        });
    }
}); 