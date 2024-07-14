// script.js

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o formulário de contato pelo ID
    const contactForm = document.getElementById('contactForm');

    // Verifica se o formulário existe antes de adicionar o listener
    if (contactForm) {
        // Adiciona um listener para o evento de submissão do formulário
        contactForm.addEventListener('submit', (event) => {
            // Previne o envio do formulário para processar a validação
            event.preventDefault();

            // Obtém os valores dos campos do formulário
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Verifica se todos os campos estão preenchidos
            if (name && email && message) {
                // Exibe uma mensagem de confirmação
                alert('Obrigado por entrar em contato, ' + name + '! Sua mensagem foi enviada com sucesso.');
                
                // Limpa os campos do formulário
                contactForm.reset();
            } else {
                // Exibe uma mensagem de erro se algum campo estiver vazio
                alert('Por favor, preencha todos os campos do formulário.');
            }
        });
    }

    // Código para a abertura do modal de imagens
    // Obtenha o modal
    var modal = document.getElementById("myModal");

    // Obtenha a imagem e insira-a no modal - use o "alt" texto da imagem como uma legenda
    var images = document.getElementsByClassName("clickable");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    // Variáveis para navegação
    var currentIndex;

    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            currentIndex = Array.from(images).indexOf(this);
        }
    }

    // Função para navegação
    function showImage(index) {
        if (index >= images.length) { index = 0; }
        if (index < 0) { index = images.length - 1; }
        modalImg.src = images[index].src;
        captionText.innerHTML = images[index].alt;
        currentIndex = index;
    }

    // Navegação para a próxima imagem
    var next = document.getElementsByClassName("next")[0];
    if (next) {
        next.onclick = function() {
            showImage(currentIndex + 1);
        }
    }

    // Navegação para a imagem anterior
    var prev = document.getElementsByClassName("prev")[0];
    if (prev) {
        prev.onclick = function() {
            showImage(currentIndex - 1);
        }
    }

    // Obtenha o elemento <span> que fecha o modal
    var span = document.getElementsByClassName("close")[0];

    // Quando o usuário clicar no <span> (x), feche o modal
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }
});

