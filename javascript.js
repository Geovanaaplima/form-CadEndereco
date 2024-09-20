'use strict'; //Modo restrito 
//Este modo faz com que o JavaScript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
/* Consumo de API - https://viacep.com.br/ */

// Função para limpar formulário
const limparFormulario = () =>{
    document.getElementById('logradouro').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('inputZip').value = '';
    document.getElementById('numero de residencia').value = '';
    document.getElementById('complemento').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('bairro').value = '';
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

// length é uma propriedade que verifica a quantidade de caracteres dentro do argumento cep.
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//Função para preencher formulário com campos da API
const preencherFormulario = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}