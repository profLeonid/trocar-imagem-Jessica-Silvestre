
'use strict'
const botao = document.getElementById('click')
const img = document.getElementById('imagem')

botao.addEventListener('click', () => {

  if (img.src.includes('img/siena.jpg')) {
    img.src = 'img/toscana.jpg'
  } else {
    img.src = 'img/siena.jpg'
  }

})