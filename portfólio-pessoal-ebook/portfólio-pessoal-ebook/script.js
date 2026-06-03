
// Seleciona o formulário e o aviso de sucesso
const formulario = document.getElementById('form-contato');
const alertaSucesso = document.getElementById('mensagem-sucesso');

// Escuta quando o usuário tenta enviar o formulário
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); 

    // Pega os valores digitados 
    const nomeUsuario = document.getElementById('nome').value;
    const mensagemUsuario = document.getElementById('mensagem').value;

    console.log(`Nome: ${nomeUsuario} | Mensagem: ${mensagemUsuario}`);

    
    alertaSucesso.classList.add('mostrar');


    formulario.reset();
});