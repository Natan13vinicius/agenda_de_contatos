// pegar os inputs
const form = document.querySelector('form')
// chamar os inputs de nome e telefone
const nomeContatoInput = document.querySelector('#nome-contato')
const telefoneContatoInput = document.querySelector('#telefone-contato')
// // array nomes
const nomes = [];
// array telefones
const telefones = [];

let nomeValido = false

// let linha = '<tr>'
let linha = ''; // Inicialize a variável linha como uma string vazia



form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Verificar a validade do nome
    let validacao = nomeContatoInput.value.split(" ");
    if (validacao.length < 2) {
        alert('Por favor digite pelo menos o sobrenome do seu contato.')
    } else {
        adicionarLinha();
        atualizarTabela();
        // mascara telefone
        mascara(o, f)
        execmascara()
        mtel(v)

    }




})



function adicionarLinha() {
    // verifica se o nome esta correto
    let validacao = nomeContatoInput.value.split(" ");
    if (validacao.length < 2) {
        alert('Por favor digite pelo menos o sobrenome do seu contato.')
        return; // Saia da função se a validação falhar
    }
    // enviar o valor de nomeContatoInput para array nomes
    nomes.push(nomeContatoInput.value)
    telefones.push(telefoneContatoInput.value)



    // criar variavel que contem tabela
    // let linha = '<tr>'
    linha += `<td> ${nomeContatoInput.value}</td>`
    linha += `<td>${telefoneContatoInput.value}</td>`
    linha += '</tr>'
}




function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linha
    nomeContatoInput.value = ''
    telefoneContatoInput.value = ''

}

// mascara telefone
// keyup
function mascara(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("execmascara()", 1)
}
function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}
function mtel(v) {
    v = v.replace(/\D/g, "");             //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

