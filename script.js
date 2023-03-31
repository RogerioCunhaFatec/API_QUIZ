//require('fs').readFileSync('input.txt', 'utf8')


// Área dedicada as variaveis utilizadas nas questões. 

let pergunta01 = ["Pergunta 1:",1.1,1.2,1.3,1.4,0]
let pergunta02 = ["Pergunta 2:",2.1,2.2,2.3,2.4,1]
let pergunta03 = ["Pergunta 3:",3.1,3.2,3.3,3.4,2]
let pergunta04 = ["Pergunta 4:",4.1,4.2,4.3,4.4,3]
let pergunta05 = ["Pergunta 5:",5.1,5.2,5.3,5.4,4]
let pergunta06 = ["Pergunta 6:",6.1,6.2,6.3,6.4,5]
let pergunta07 = ["Pergunta 7:",7.1,7.2,7.3,7.4,6]
let pergunta08 = ["Pergunta 8:",8.1,8.2,8.3,8.4,7]
let pergunta09 = ["Pergunta 9:",9.1,9.2,9.3,9.4,8]
let pergunta10 = ["Pergunta 10:",10.1,10.2,10.3,10.4,9]


var lista
var resposta = {0 : 0, 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0 ,6 : 0, 7 : 0, 8 : 0, 9: 0}
var gabarito = {0 : 1, 1 : 2, 2 : 3, 3 : 4, 4 : 1, 5 : 2 ,6 : 3, 7 : 4, 8 : 1, 9: 2}
var resultado = 0


// Determina questão a ser carregada e carrega respostas.

window.onload = carregar(pergunta01)
 
function carregar(var1){
    lista = [var1]
//  console.log(lista)

for(i=0; i < document.getElementsByClassName("lista").length; i++){
    document.getElementsByClassName("lista")[i].textContent = lista[0][i]
//  console.log(document.getElementsByClassName("lista")[i])
    }
}

// Executa o carregamento das respostas sobre o array resposta para check final. 


function answer(var1){

    resposta[lista[0][5]] = var1
    console.log(resposta)
}




// Realiza teste das respostas e já ínicia carregamento do díploma 

function answerTest(){

    for(i=0; i < 10 ; i++){

    //console.log(gabarito[i])
    //console.log(resposta[i])

        if (resposta[i] == gabarito[i]){
            resultado +=1
        }

    }
    console.log(resultado)

    document.getElementsByClassName("diploma")[0].style.display = "block"
    document.getElementsByClassName("diploma")[1].style.display = "block"
    document.getElementsByClassName("diploma2")[0].style.display = "block"
    
    document.getElementById("nota_diploma").textContent = `Nota da sua avaliação foi : ${resultado} de 10`

}

function teste(){
console.log(document.getElementById("botao_1").value)}




var nomeDiploma


function carregaDados(){
    
// Grava nome em uma variavel e carrega no Diploma.html

    console.log(document.getElementById("nome_diploma").value)

    nomeDiploma = document.getElementById("nome_diploma").value
    
    console.log(nomeDiploma)


// Manipulação documento Diploma

    document.getElementById("diploma_nome").textContent =  nomeDiploma

}


function imprimir(){
    document.getElementsByClassName("quizz")[0].style.display = "none"
    document.getElementsByClassName("diploma")[0].style.display = "none"
    document.getElementsByClassName("diploma")[1].style.display = "none"

    document.getElementById("imagem_diploma").style.display = "block"

    window.print()
}

