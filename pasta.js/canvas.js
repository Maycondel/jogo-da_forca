
var tela_forca = document.querySelector('#canvas')
var desenhar = tela_forca.getContext('2d')
function desenha_forca(erro){
  
if(erro == 1){
desenhar.beginPath()
desenhar.moveTo(310,235)
desenhar.lineTo(310,242)
desenhar.lineTo(330,242)
desenhar.lineTo(330,235)
desenhar.stroke()
desenhar.beginPath()
desenhar.arc(320,275,35,0, 2 * 3.14)
desenhar.stroke()
}else if(erro == 2){
desenhar.fillStyle = '#cc7911'
desenhar.beginPath()
desenhar.moveTo(309,308)
desenhar.lineTo(309,319)
desenhar.lineTo(330,319)
desenhar.lineTo(330,308)
desenhar.lineTo(309,308)
desenhar.fill()
desenhar.stroke()
}else if (erro == 3) {
    
desenhar.beginPath()
desenhar.moveTo(320,319)
desenhar.lineTo(320,450)
desenhar.stroke()
}else if(erro == 4){
desenhar.beginPath()
desenhar.moveTo(320,450)
desenhar.lineTo(280,500)
desenhar.stroke()
}else if(erro == 5){
desenhar.beginPath()
desenhar.moveTo(320,450)
desenhar.lineTo(360,500)
desenhar.stroke()
}else if(erro == 6){
desenhar.beginPath()
desenhar.moveTo(320,319)
desenhar.lineTo(370,380)
desenhar.stroke()
}else if(erro == 7){
desenhar.beginPath()
desenhar.moveTo(320,319)
desenhar.lineTo(270,380)
desenhar.stroke()

}
else{
    desenhar.beginPath()
    desenhar.moveTo(300,280)
    desenhar.lineTo(320,280)
    desenhar.stroke()
    desenhar.beginPath()
    desenhar.moveTo(310,270)
    desenhar.lineTo(310,290)
    desenhar.stroke()

    desenhar.beginPath()
    desenhar.moveTo(328,280)
    desenhar.lineTo(350,280)
    desenhar.stroke()
    desenhar.beginPath()
    desenhar.moveTo(340,270)
    desenhar.lineTo(340,290)
    desenhar.stroke()
    perdeu() 
}
}
function desenhar_localforca(){
    desenhar.fillStyle = '#cc7911'
    desenhar.beginPath()
    desenhar.moveTo(25,600)
    desenhar.lineTo(90,550)
    desenhar.lineTo(90,200)
    desenhar.lineTo(350,200)
    desenhar.lineTo(350,220)
    desenhar.lineTo(110,220)
    desenhar.lineTo(110,550)
    desenhar.lineTo(175,600)
    desenhar.lineTo(25,600)
    desenhar.fill()
    
    desenhar.stroke()
    desenhar.fillStyle = '#cc7911'
    desenhar.beginPath()
    desenhar.moveTo(300,220)
    desenhar.lineTo(340,220)
    desenhar.lineTo(340,235)
    desenhar.lineTo(300,235)
    desenhar.lineTo(300,220)
    desenhar.fill()
    desenhar.stroke()

}
desenhar_localforca()
