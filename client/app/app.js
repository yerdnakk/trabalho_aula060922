const controller = new NegociacaoController();

document.querySelector('form').addEventListener('submit', function(e) {
    controller.adiciona.bind(controller);
})

document.querySelector('#notao-apagar')
.addEventListener('click', controller.apaga.bind(controller))

document.querySelector('#botao-importa').addEventListener('click', controller.importaNegociacoes.bind(controller))