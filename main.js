"use strict"

const images = [
]


function criarImagem(srcImage) {
    const galeria = document.getElementById('galeria')

    const image = document.createElement('img')
    image.src = srcImage
    galeria.appendChild(image)
}

function loadImages() {

    // for (let i = 0 ;i < 8 ; i++){
    //     const image = document.createElement('img')
    //     image.src = images[i]
    //     galeria.appendChild(image)  
    // }
    images.forEach(criarImagem)

}

loadImages()