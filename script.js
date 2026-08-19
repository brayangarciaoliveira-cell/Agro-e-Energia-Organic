document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll(".btn-reacao");

    botoes.forEach(function (botao) {
        botao.addEventListener("click", function () {
            const contador = botao.querySelector(".contador");
            let valorAtual = parseInt(contador.textContent, 10);
            contador.textContent = valorAtual + 1;

            // Pequeno efeito de feedback ao clicar
            botao.style.transform = "scale(1.1)";
            setTimeout(() => {
                botao.style.transform = "none";
            }, 150);
        });
    });
});