

//require('fs').readFileSync('input.txt', 'utf8')


let pergunta1 = ["Pergunta 1:",1.1,1.2,1.3,1.4]
let pergunta2 = ["Pergunta 2:",2.1,2.2,2.3,2.4]
let pergunta3 = ["Pergunta 3:",3.1,3.2,3.3,3.4]
let pergunta4 = ["Pergunta 4:",4.1,4.2,4.3,4.4]

var lista

// Determina questão a ser carregada e carrega respostas nos botões.
 
function carregar(var1){
    lista = [var1]
    console.log(lista)


for(i=0; i < document.getElementsByClassName("lista").length; i++)
{
    document.getElementsByClassName("lista")[i].textContent = lista[0][i]
    console.log(document.getElementsByClassName("lista")[i])
    }
}


var resposta
function answer(var1){
    console.log(var1)
    resposta = var1
}

console.log(resposta)

function answerTest(){
    if (resposta == 2){
        console.log("Resposta correta")
    }else{
        console.log("resposta incorreta")
    }
}

function teste(){
console.log(document.getElementById("botao_1").value)}


// Grava nome em uma variavel e carrega no Diploma.html

var nomeDiploma
function salvaNome(){
    console.log(document.getElementById("nome_diploma").value)

    nomeDiploma = document.getElementById("nome_diploma").value
    
    console.log(nomeDiploma)
}


function chamaDiploma(var1){
    window.open(var1)
}


// Manipulação documento Diploma

function carregaDados(){
    
    document.getElementById("diploma_nome").textContent =  nomeDiploma
    document.getElementsByClassName  

}


function imprimir(){
    window.print()
}

