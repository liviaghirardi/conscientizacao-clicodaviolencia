document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Funcionalidade do Botão "Sair Rápido" (Segurança)
    // Este botão redireciona para um site neutro e usa "replace" para que
    // o botão "Voltar" do navegador não retorne para esta página, protegendo a usuária.
    const btnSairRapido = document.getElementById("btn-sair-rapido");
    
    if (btnSairRapido) {
        btnSairRapido.addEventListener("click", (e) => {
            e.preventDefault();
            // Redireciona imediatamente para o Google (ou página de clima/notícias)
            window.location.replace("https://www.google.com");
        });
    }

    // 2. Smooth Scrolling para links internos
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

});