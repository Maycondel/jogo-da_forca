var caixa = document.querySelector('.flex-container')
var localerro = document.querySelector('#local-erro')
var palavraDaforca = ['ALURA','CHALLENGE','REACT','NODEJS','FORCA','INTERVALO','DESAFIO','NODE','FERSAO','ORACLE']
var mensagem_perdeu = document.querySelector('#mensagem-perdeu')
var mensagem_ganhou = document.querySelector('.ganhou')
var numerodalista = 0
var valores = [];
var letracertas ;
var acertos = []
function busacadados (dados) {
    
  return   document.querySelectorAll(dados)
    }


function dadosdoElementos(clase,id){
let elementos = document.createElement('div')
caixa.appendChild(elementos)
elementos.setAttribute('class',clase)
elementos.setAttribute('id', id)

}
addEventListener('keypress',(e)=>{
    console.log(letracertas)
var chaveteste = e.key.replace(/[^a-zA-Z]/g,'').toUpperCase()
 verificar_letra(chaveteste);
});
function verificar_letra(chaveteste){
if (palavraDaforca[numerodalista].includes(chaveteste)){
    inserindotexto(palavraDaforca[numerodalista],chaveteste)
   Ganhou(chaveteste)
}else{
    mostrarerro(chaveteste)

}
}

function escolhepalavrasecreta(){
     numerodalista = Math.floor(Math.random()*palavraDaforca.length)
    for(let i = 0; i < palavraDaforca.length; i++){

        palavras = palavraDaforca[numerodalista]
    }
    console.log(palavras)
    return montar_traços(palavras)
}
addEventListener('load',escolhepalavrasecreta)


function montar_traços(palavra){

for(let i = 0 ; i < palavra.length; i++){
 var elemento_filho = document.createElement('div')
 caixa.appendChild(elemento_filho)
 elemento_filho.classList.add("conteiner")
 
}

}
function mostrarerro(letra){
    if (!verfificar_lista(letra,valores) && valores.length <= 8 ){
        valores.push(letra)
    localerro.innerHTML += letra 
    desenha_forca(valores.length)
 
    }else if (valores.length < 8){
        alert('chute ja digitado')
    }
  
}

function inserindotexto(palavra,letra){
    letracertas  = document.querySelectorAll('.conteiner')
  
    for  ( var  i  =  0 ;  i  <  palavra.length ;  i ++ )  {
        if  ( letra  ==  palavra[i] && letracertas[i].innerHTML ==  '')  {
            letracertas[i].innerHTML = letra;
        }
        
    }
   
}
function verfificar_lista(letra ,valor){
if(valor.indexOf(letra) != -1){
    return true
}else{
    return false
}
}
function perdeu(){
  mensagem_perdeu.innerHTML = 'voce perdeu'     
    
}
function Ganhou(lcertas){

    if (!verfificar_lista(lcertas,acertos)  ){
        acertos.push(lcertas)
}
 if(palavraDaforca[numerodalista].length == acertos.length){
  mensagem_ganhou.innerHTML = 'Você ganhou'

}
}
console.log(acertos)
