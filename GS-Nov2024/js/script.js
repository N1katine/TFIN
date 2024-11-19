document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".fade-container"); // Seleciona todos os containers

    // Função de callback para o Intersection Observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se o container entrou na tela, adiciona o fade-in
                entry.target.classList.add("show");
                entry.target.classList.remove("hide");
            } else {
                // Se o container saiu da tela, adiciona o fade-out
                entry.target.classList.add("hide");
                entry.target.classList.remove("show");
            }
        });
    };

    // Configuração do Intersection Observer
    const observerOptions = {
        threshold: 0.1, // Quando 10% do container for visível
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observa cada container
    containers.forEach(container => {
        container.classList.add("fade-container"); // Adiciona a classe inicial
        observer.observe(container);
    });
});
