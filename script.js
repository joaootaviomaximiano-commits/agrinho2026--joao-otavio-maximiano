// Função simples para interatividade no site
function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem-oculta");
    
    // Se a mensagem estiver escondida, ela aparece. Se clicar de novo, ela some.
    if (mensagem.classList.contains("hidden")) {
        mensagem.classList.remove("hidden");
    } else {
        mensagem.classList.add("hidden");
    }
}