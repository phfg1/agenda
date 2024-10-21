const form = document.getElementById('form-agenda');
const nome = [];
const telefone = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha();
    ordenaContato();
    atualizaTabela();

});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('tel-contato');

    nome.push(inputNomeContato.value);
    telefone.push(inputTelefoneContato.value);

    let linha = '<tr>';

    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += '</tr>';
    linhas += linha;

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function ordenaContato() {
    const contatos = nome.map((n, index) => {
        return {
            nome: n,
            telefone: telefone[index],
        };
    });

    contatos.sort((a, b) => a.nome.localeCompare(b.nome));

    for (let i = 0; i < contatos.length; i++) {
        nome[i] = contatos[i].nome;
        telefone[i] = contatos[i].telefone;
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = '';

    let linhasAtualizadas = '';

    for (let i = 0; i < nome.length; i++) {
        let linha = '<tr>';
        linha += `<td>${nome[i]}</td>`;
        linha += `<td>${telefone[i]}</td>`;
        linha += '</tr>';
        linhasAtualizadas += linha;
    }

    corpoTabela.innerHTML = linhasAtualizadas;
}