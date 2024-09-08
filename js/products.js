document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.nav-link');
    
    // Dados dos produtos
    const data = {
        "electronics": [
            { "title": "Pistola de Massagem Elétrica para Tecidos Profundos – Alívio Muscular Poderoso", "description": "Autonomia de Bateria: 4 a 6 horas de uso contínuo. Tempo de recarga: 3 horas, com carregamento prático via USB.",  "image": "assets/image/massageador.svg", "link": "https://s.shopee.com.br/9pLCB3bNqK", "stars": 5, "sold": 28 },
            { "title": "Fone de Ouvido Bluetooth 5.0 TWS E6s Sem Fio com Microfone e Cancelamento de Ruído - Preto", "description": "Oferece som de qualidade, permitindo atender chamadas com praticidade.", "image": "assets/image/fone.svg", "link": "https://s.shopee.com.br/AUatkzY7wQ", "stars": 5, "sold": 56 },
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
            { "title": "Conjunto de 22 Anéis Geométricos Dourados Retrô – Acessórios Elegantes para Jóias Femininas", "description": "Em estoque ✔ Melhor preço ✔ Alta qualidade ✔ 100% novo ✔.", "image": "assets/image/anel.svg", "link": "https://s.shopee.com.br/5KsnGwRGBO", "stars": 4, "sold": 227 },
            { "title": "Óculos de Sol UV400 Estilo Europeu e Americano – Unissex, Novo Modelo 2024", "description": "Armação plástica durável, lentes de policarbonato e proteção UV. Alta qualidade, segurança e estilo.", "image": "assets/image/oculos.svg", "link": "https://s.shopee.com.br/LU7Nz63IS", "stars": 5, "sold": 45 },
            { "title": "Ring Light Iluminador 10 com Tripé de 2,10m - MarisaStore", "description": "Capa protetora para smartphones com design moderno e resistência.", "image": "https://via.placeholder.com/300x200", "link": "https://s.shopee.com.br/2qBcGEmcGe", "stars": 3, "sold": 45 },
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
            { "title": "Balança Digital de Bioimpedância Corporal – Suporta até 180kg", "description": "Monitoramento em tempo real com sistema de sensores de alta precisão. Compatível com Android 4.4 e iOS 7.0 ou versões superiores.", "image": "assets/image/balanca.svg", "link": "https://s.shopee.com.br/7KdrKbb76D", "stars": 5, "sold": 63 },
            { "title": "Creatina Black Skull Turbo 300g – Potência e Energia da Caveira Preta", "description": "Fórmula com Creatina Monohidratada e Maltodextrina. Produto 100% original, direto da fábrica.", "image": "assets/image/creatina.svg", "link": "https://s.shopee.com.br/8f9FD0Qg6R", "stars": 5, "sold": 98 },
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
            { "title": "Par de Meias Esportivas Antiderrapantes para Basquete - Conforto e Desempenho", "description": "Fabricadas com material respirável e solado reforçado para melhor desempenho durante os jogos.", "image": "assets/image/basquete.svg", "link": "https://s.shopee.com.br/2fs9nX1mXR", "stars": 5, "sold": 314 },
            { "title": "Calça Jogger Masculina Esportiva Respirável para Academia e Corrida", "description": "Ideal para academia, corrida e estilo de rua. Modelo básico e térmico, perfeito para garantir conforto em qualquer clima.", "image": "assets/image/calca.svg", "link": "https://s.shopee.com.br/9KP3lCcBrT", "stars": 4, "sold": 30 },
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
            { "title": "Escova a Vapor 3 em 1 para Cães e Gatos", "description": "Utiliza tecnologia de vaporização para cuidar dos pelos dos seus pets.", "image": "assets/image/escovapet.svg", "link": "https://s.shopee.com.br/9pLD22ZDE4", "stars": 5, "sold": 103 },
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
            { "title": "Inalador AIQUE Ultra-Sônico Portátil", "description": "Nebulizador silencioso de grau médico com volume de névoa ajustável, ideal para tratamentos respiratórios práticos e eficientes.", "image": "assets/image/inalador.svg", "link": "https://s.shopee.com.br/9UiMZY1ZgH", "stars": 5, "sold": 32 },
            { "title": "Termômetro Digital Infravermelho - Medição Precisa", "description": "Leitura rápida em 1 segundo com precisão de ±0,4°F. Recomendado por profissionais de saúde.", "image": "assets/image/termometro.svg", "link": "https://s.shopee.com.br/4pwcnq6nO2", "stars": 5, "sold": 55 },
            { "title": "Extrator de Leite Automático para Amamentação", "description": "Com 9 velocidades ajustáveis, oferecendo massagem, bombeamento e uma extração confortável.", "image": "assets/image/mama.svg", "link": "https://s.shopee.com.br/4VJq76f29g", "stars": 5, "sold": 237 },
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
                        <a href="${product.link}" target="_blank" " class="btn btn-primary">Comprar</a>
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
