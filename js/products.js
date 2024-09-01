document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.nav-link');
    
    // Dados dos produtos
    const data = {
        "electronics": [
            { "title": "Smartphone X", "description": "Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera de 48MP.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 120 },
            { "title": "Smartphone X", "description": "Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera de 48MP.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 120 },
            { "title": "Smartphone X", "description": "Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera de 48MP.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 120 },
            { "title": "Smartphone X", "description": "Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera de 48MP.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 120 },
            { "title": "Smartphone X", "description": "Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera de 48MP.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 120 },
            { "title": "Smartphone X", "description": "Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera de 48MP.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 120 },
            { "title": "Smartphone X", "description": "Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera de 48MP.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 120 },
            { "title": "Smartphone X", "description": "Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera de 48MP.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 120 },
            { "title": "Smartphone X", "description": "Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera de 48MP.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 120 },
            { "title": "Smartphone X", "description": "Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera de 48MP.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 120 },
            { "title": "Smartphone X", "description": "Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera de 48MP.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 120 },
            { "title": "Fone de Ouvido Bluetooth", "description": "Fone de ouvido Bluetooth com cancelamento de ruído e bateria de longa duração.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 85 }
            // Adicione mais produtos conforme necessário
        ],
        "accessories": [
            { "title": "Capa para Smartphone", "description": "Capa protetora para smartphones com design moderno e resistência.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 45 },
            { "title": "Capa para Smartphone", "description": "Capa protetora para smartphones com design moderno e resistência.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 45 },
            { "title": "Capa para Smartphone", "description": "Capa protetora para smartphones com design moderno e resistência.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 45 },
            { "title": "Capa para Smartphone", "description": "Capa protetora para smartphones com design moderno e resistência.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 45 },
            { "title": "Capa para Smartphone", "description": "Capa protetora para smartphones com design moderno e resistência.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 45 },
            { "title": "Capa para Smartphone", "description": "Capa protetora para smartphones com design moderno e resistência.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 45 },
            { "title": "Capa para Smartphone", "description": "Capa protetora para smartphones com design moderno e resistência.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 45 },
            { "title": "Capa para Smartphone", "description": "Capa protetora para smartphones com design moderno e resistência.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 45 },
            { "title": "Capa para Smartphone", "description": "Capa protetora para smartphones com design moderno e resistência.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 45 },
            { "title": "Capa para Smartphone", "description": "Capa protetora para smartphones com design moderno e resistência.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 45 },
            { "title": "Capa para Smartphone", "description": "Capa protetora para smartphones com design moderno e resistência.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 45 },
            { "title": "Carregador Rápido", "description": "Carregador rápido para smartphones com compatibilidade universal.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 70 }
            // Adicione mais produtos conforme necessário
        ],
        "fitness": [
            { "title": "Tênis de Corrida", "description": "Tênis leve e confortável para corridas e atividades físicas.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 60 },
            { "title": "Tênis de Corrida", "description": "Tênis leve e confortável para corridas e atividades físicas.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 60 },
            { "title": "Tênis de Corrida", "description": "Tênis leve e confortável para corridas e atividades físicas.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 60 },
            { "title": "Tênis de Corrida", "description": "Tênis leve e confortável para corridas e atividades físicas.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 60 },
            { "title": "Tênis de Corrida", "description": "Tênis leve e confortável para corridas e atividades físicas.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 60 },
            { "title": "Tênis de Corrida", "description": "Tênis leve e confortável para corridas e atividades físicas.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 60 },
            { "title": "Tênis de Corrida", "description": "Tênis leve e confortável para corridas e atividades físicas.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 60 },
            { "title": "Tênis de Corrida", "description": "Tênis leve e confortável para corridas e atividades físicas.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 60 },
            { "title": "Tênis de Corrida", "description": "Tênis leve e confortável para corridas e atividades físicas.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 60 },
            { "title": "Tênis de Corrida", "description": "Tênis leve e confortável para corridas e atividades físicas.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 60 },
            { "title": "Tênis de Corrida", "description": "Tênis leve e confortável para corridas e atividades físicas.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 60 },
            { "title": "Roupas de Ginástica", "description": "Conjunto de roupas de ginástica com tecido respirável e confortável.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 90 }
            // Adicione mais produtos conforme necessário
        ],
        "sports": [
            { "title": "Bola de Futebol", "description": "Bola de futebol de alta qualidade, ideal para treinos e jogos.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 30 },
            { "title": "Bola de Futebol", "description": "Bola de futebol de alta qualidade, ideal para treinos e jogos.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 30 },
            { "title": "Bola de Futebol", "description": "Bola de futebol de alta qualidade, ideal para treinos e jogos.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 30 },
            { "title": "Bola de Futebol", "description": "Bola de futebol de alta qualidade, ideal para treinos e jogos.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 30 },
            { "title": "Bola de Futebol", "description": "Bola de futebol de alta qualidade, ideal para treinos e jogos.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 30 },
            { "title": "Bola de Futebol", "description": "Bola de futebol de alta qualidade, ideal para treinos e jogos.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 30 },
            { "title": "Bola de Futebol", "description": "Bola de futebol de alta qualidade, ideal para treinos e jogos.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 30 },
            { "title": "Bola de Futebol", "description": "Bola de futebol de alta qualidade, ideal para treinos e jogos.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 30 },
            { "title": "Bola de Futebol", "description": "Bola de futebol de alta qualidade, ideal para treinos e jogos.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 30 },
            { "title": "Bola de Futebol", "description": "Bola de futebol de alta qualidade, ideal para treinos e jogos.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 30 },
            { "title": "Bola de Futebol", "description": "Bola de futebol de alta qualidade, ideal para treinos e jogos.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 30 },
            { "title": "Raquete de Tênis", "description": "Raquete de tênis com material resistente e ótima performance.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 25 }
            // Adicione mais produtos conforme necessário
        ],
        "cosmetics": [
            { "title": "Base Líquida", "description": "Base líquida com cobertura completa e acabamento natural.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 40 },
            { "title": "Base Líquida", "description": "Base líquida com cobertura completa e acabamento natural.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 40 },
            { "title": "Base Líquida", "description": "Base líquida com cobertura completa e acabamento natural.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 40 },
            { "title": "Base Líquida", "description": "Base líquida com cobertura completa e acabamento natural.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 40 },
            { "title": "Base Líquida", "description": "Base líquida com cobertura completa e acabamento natural.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 40 },
            { "title": "Base Líquida", "description": "Base líquida com cobertura completa e acabamento natural.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 40 },
            { "title": "Base Líquida", "description": "Base líquida com cobertura completa e acabamento natural.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 40 },
            { "title": "Base Líquida", "description": "Base líquida com cobertura completa e acabamento natural.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 40 },
            { "title": "Base Líquida", "description": "Base líquida com cobertura completa e acabamento natural.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 40 },
            { "title": "Base Líquida", "description": "Base líquida com cobertura completa e acabamento natural.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 40 },
            { "title": "Base Líquida", "description": "Base líquida com cobertura completa e acabamento natural.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 3, "sold": 40 },
            { "title": "Máscara de Cílios", "description": "Máscara de cílios à prova d'água com efeito volumoso.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 55 }
            // Adicione mais produtos conforme necessário
        ],
        "pets": [
            { "title": "Ração para Cães", "description": "Ração balanceada para cães com nutrientes essenciais.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 100 },
            { "title": "Ração para Cães", "description": "Ração balanceada para cães com nutrientes essenciais.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 100 },
            { "title": "Ração para Cães", "description": "Ração balanceada para cães com nutrientes essenciais.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 100 },
            { "title": "Ração para Cães", "description": "Ração balanceada para cães com nutrientes essenciais.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 100 },
            { "title": "Ração para Cães", "description": "Ração balanceada para cães com nutrientes essenciais.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 100 },
            { "title": "Ração para Cães", "description": "Ração balanceada para cães com nutrientes essenciais.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 100 },
            { "title": "Ração para Cães", "description": "Ração balanceada para cães com nutrientes essenciais.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 100 },
            { "title": "Ração para Cães", "description": "Ração balanceada para cães com nutrientes essenciais.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 100 },
            { "title": "Ração para Cães", "description": "Ração balanceada para cães com nutrientes essenciais.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 100 },
            { "title": "Ração para Cães", "description": "Ração balanceada para cães com nutrientes essenciais.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 100 },
            { "title": "Ração para Cães", "description": "Ração balanceada para cães com nutrientes essenciais.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 100 },
            { "title": "Brinquedo para Gatos", "description": "Brinquedo interativo para gatos, ajuda a estimular a atividade física.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 80 }
            // Adicione mais produtos conforme necessário
        ],
        "kids": [
            { "title": "Brinquedo Educativo", "description": "Brinquedo educativo para crianças, estimula o aprendizado e a criatividade.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 55 },
            { "title": "Brinquedo Educativo", "description": "Brinquedo educativo para crianças, estimula o aprendizado e a criatividade.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 55 },
            { "title": "Brinquedo Educativo", "description": "Brinquedo educativo para crianças, estimula o aprendizado e a criatividade.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 55 },
            { "title": "Brinquedo Educativo", "description": "Brinquedo educativo para crianças, estimula o aprendizado e a criatividade.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 55 },
            { "title": "Brinquedo Educativo", "description": "Brinquedo educativo para crianças, estimula o aprendizado e a criatividade.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 55 },
            { "title": "Brinquedo Educativo", "description": "Brinquedo educativo para crianças, estimula o aprendizado e a criatividade.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 55 },
            { "title": "Brinquedo Educativo", "description": "Brinquedo educativo para crianças, estimula o aprendizado e a criatividade.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 55 },
            { "title": "Brinquedo Educativo", "description": "Brinquedo educativo para crianças, estimula o aprendizado e a criatividade.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 55 },
            { "title": "Brinquedo Educativo", "description": "Brinquedo educativo para crianças, estimula o aprendizado e a criatividade.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 55 },
            { "title": "Brinquedo Educativo", "description": "Brinquedo educativo para crianças, estimula o aprendizado e a criatividade.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 55 },
            { "title": "Brinquedo Educativo", "description": "Brinquedo educativo para crianças, estimula o aprendizado e a criatividade.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 4, "sold": 55 },
            { "title": "Lego Construtor", "description": "Conjunto de Lego com peças para construção e criatividade.", "image": "https://via.placeholder.com/300x200", "link": "#", "stars": 5, "sold": 70 }
            // Adicione mais produtos conforme necessário
        ]
    };

    // Função para gerar cards
    function generateCards(category) {
        const products = data[category];
        const container = document.querySelector(`#${category}-products`);
        container.innerHTML = ''; // Limpa o container antes de adicionar novos cards

        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'col-md-3 mb-4';

            // Gerar estrelas
            const stars = '★'.repeat(product.stars) + '☆'.repeat(5 - product.stars);
            // Adicionar card HTML
            card.innerHTML = `
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <span class="text-warning">${stars}</span> 
                            <span>${product.sold} vendidos</span>
                        </div>
                        <a href="${product.link}" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
            `;
            
            container.appendChild(card);
        });
    }

    // Inicializa com a aba ativa
    generateCards('electronics');

    // Adiciona eventos de clique nas abas
    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            const category = tab.getAttribute('aria-controls');
            generateCards(category);
        });
    });
});
