const URL_API = 'http://localhost:7000/api/contador';
const elValor = document.getElementById('valor');
const elErro = document.getElementById('erro');
const botao = document.getElementById('btnIncrementar');

function carregarValorAtual() {
    fetch(URL_API)
        .then(resposta => resposta.json())
        .then(dados => {
            elValor.textContent = dados.valor;
        })
        .catch(erro => {
            elErro.textContent = 'Não consegui conectar no back-end. Ele está rodando?';
        });
}

function incrementar() {
    elErro.textContent = '';

    fetch(URL_API + '/incrementar', { method: 'POST' })
        .then(resposta => resposta.json())
        .then(dados => {
            elValor.textContent = dados.valor;
        })
        .catch(erro => {
            elErro.textContent = 'Não consegui conectar no back-end. Ele está rodando?';
        });
}

botao.addEventListener('click', incrementar);
carregarValorAtual();