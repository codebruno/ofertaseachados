// Substitua pelos seus IDs reais do EmailJS
const USER_ID = 'UgAewxi-kApc7kvT-'; // Sua chave pública do EmailJS
const SERVICE_ID = 'service_iji44uo'; // Seu Service ID do EmailJS
const TEMPLATE_ID = 'template_d0lv3gb'; // Seu Template ID do EmailJS

// Inicialize o EmailJS com sua chave pública
emailjs.init(USER_ID);

// Função para enviar o formulário
function sendEmail(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    // Enviar o formulário usando EmailJS
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target)
        .then(function(response) {
            // Mensagem de sucesso
            console.log('Mensagem enviada com sucesso!', response);
            document.getElementById('formStatus').innerText = 'Mensagem enviada com sucesso!';
            event.target.reset(); // Limpa o formulário
        }, function(error) {
            // Mensagem de erro
            console.log('Falha ao enviar mensagem.', error);
            document.getElementById('formStatus').innerText = 'Falha ao enviar mensagem.';
        });
}

// Adiciona o listener para o formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', sendEmail);
    }
});
