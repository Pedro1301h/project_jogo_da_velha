"use strict"

let jogaDois = document.querySelector('#jogaDois')
let jogaRandom = document.querySelector('#jogaRandom')
let jogo = document.querySelector('#jogo')
let botoes = document.querySelector('#botoes')
let quadro
function criarQuadros(){
    for(let i = 1;i < 10;i++){
        quadro = document.createElement('div')
        jogo.appendChild(quadro)
        quadro.setAttribute('class','quadros')
        quadro.setAttribute('id','quadro'+[i])
        quadro.innerHTML=[i]
    }
}

jogaDois.addEventListener('click',function(){
    botoes.innerHTML=''
    criarQuadros()
})

jogaRandom.addEventListener('click',function(){
    botoes.innerHTML=''
    criarQuadros()
})