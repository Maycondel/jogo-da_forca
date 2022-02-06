var caixa = document.querySelector('.flex-container')
var localerro = document.querySelector('#local-erro')
var palavraDaforca = ['ALURA','CHALLENGE','REACT','NODEJS','FORCA','INTERVALO','DESAFIO','NODE','FERSAO','ORACLE']
var numerodalista = 0

var letracertas;
function busacadados (dados) {

  return   document.querySelectorAll(dados)
    }


function dadosdoElementos(clase,id){
let elementos = document.createElement('div')
caixa.appendChild(elementos)
elementos.setAttribute('class',clase)
elementos.setAttribute('id', id)

}
addEventListener('keydown',(e)=>{
    console.log(letracertas)
var chaveteste = e.key.replaceAll(/[^a-zA-Z]/g,'').toUpperCase()
 verificar_letra(chaveteste);
});
function verificar_letra(chaveteste){
if (palavraDaforca[numerodalista].includes(chaveteste)){
    inserindotexto(palavraDaforca[numerodalista],chaveteste)
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
    if(!palavraDaforca[numerodalista].includes(letra) ){
        alert('erro')
    
     localerro.innerHTML += ' ' +letra
    
    }else if(localerro.indexOf(letra) !== -1){
  alert('letra ja digitada')
    }
}

function inserindotexto(palavra,letra){
    letracertas  = document.querySelectorAll('.conteiner')
  
    for  ( var  i  =  0 ;  i  <  palavra.length ;  i ++ )  {
        if  ( letra  ==  palavra[i] && letracertas[i].innerHTML ==  '')  {
            letracertas[i].innerHTML = letra;
        }{

        }
      
}
}