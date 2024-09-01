// Seleciona todos os links internos de navegação
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

// Adiciona um evento de clique a cada link de navegação
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        // Obtém o alvo da rolagem
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Rola suavemente para o elemento alvo
        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Ajusta a rolagem para abaixo do cabeçalho fixo
            behavior: 'smooth'
        });
    });
});
