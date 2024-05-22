document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const menuContent = document.querySelector('.menu-content');

    menuButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Impede que o clique se propague para o documento
        menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
    });

    

    // Fecha o menu se clicar fora dele
    document.addEventListener('click', function (event) {
        if (!menuContent.contains(event.target) && menuContent.style.display === 'block') {
            menuContent.style.display = 'none';
        }
    });

    document.querySelectorAll('.button-grid .button').forEach(button => {
        button.addEventListener('click', function () {
            // Remove a classe 'button-selected' de todos os botões
            document.querySelectorAll('.button-selected').forEach(selectedButton => {
                selectedButton.classList.remove('button-selected');
            });

            // Adiciona a classe 'button-selected' ao botão clicado
            this.classList.add('button-selected');
        });
    });
    

    var buttons = document.querySelectorAll('.button');

    // Adiciona um ouvinte de evento 'click' a cada botão
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Adiciona a classe 'button-selected'
            this.classList.add('button-selected');
        });

    });

    window.onload = function () {
        var banhoButton = document.getElementById('banhoButton');
        var escovarButton = document.getElementById('escovarButton');
        var urinarButton = document.getElementById('urinarButton');
        var adicionarButton = document.getElementById('adicionarButton');

        var banhoAudio = new Audio('sound/banho.mp3');
        var escovarAudio = new Audio('sound/escovar.mp3');
        var urinarAudio = new Audio('sound/urinar.mp3');
        var adicionarAudio = new Audio('adicionar-sound.mp3');

        var currentAudio = null;

        function playAudio(audio) {
            if (currentAudio) {
                currentAudio.pause();
            }
            currentAudio = audio;
            audio.play();
        }

        banhoButton.addEventListener('click', function () {
            playAudio(banhoAudio);
        });

        escovarButton.addEventListener('click', function () {
            playAudio(escovarAudio);
        });

        urinarButton.addEventListener('click', function () {
            playAudio(urinarAudio);
        });

        adicionarButton.addEventListener('click', function () {
        });
    }

});

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const menuContent = document.querySelector('.menu-content');

    menuButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Impede que o clique se propague para o documento
        menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
    });

    

    // Fecha o menu se clicar fora dele
    document.addEventListener('click', function (event) {
        if (!menuContent.contains(event.target) && menuContent.style.display === 'block') {
            menuContent.style.display = 'none';
        }
    });

    document.querySelectorAll('.button-grid .button').forEach(button => {
        button.addEventListener('click', function () {
            // Remove a classe 'button-selected' de todos os botões
            document.querySelectorAll('.button-selected').forEach(selectedButton => {
                selectedButton.classList.remove('button-selected');
            });

            // Adiciona a classe 'button-selected' ao botão clicado
            this.classList.add('button-selected');
        });
    });
    

    var buttons = document.querySelectorAll('.button');

    // Adiciona um ouvinte de evento 'click' a cada botão
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Adiciona a classe 'button-selected'
            this.classList.add('button-selected');
        });
    
        

    });

    const samuButton = document.getElementById('samuButton');
    samuButton.addEventListener('click', function() {
        window.location.href = 'tel:192';
    });
});







