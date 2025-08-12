"use strict"
const galeria = document.getElementById('galeria')

const images = [
    {
        nome: 'Harpia',
        url: './img/aguia-harpia.jpeg'
    },
    {
        nome: 'Arara Azul',
        url: './img/arara-azul.webp'
    },
    {
        nome: 'Arbutre Barbudo',
        url: './img/arbutre-barbudo.jpg'
    },
    {
        nome: 'Bem te vi',
        url: './img/bem-te-vi.jpg'
    },
    {
        nome: 'Coruja',
        url: './img/coruja.jpeg'
    },
    {
        nome: 'Marianinha',
        url: './img/marianinha.jpg'
    },
    {
        nome: 'Tucano Toco',
        url: './img/tucano.jpg'
    },
    {
        nome: 'Urutau',
        url: './img/urutau.jpg'
    }

]


function criarImagem(srcImage) {
    const containerDiv = document.createElement('div')
    const image = document.createElement('img')
    const nameParagraph = document.createElement('p')
    image.src = srcImage.url
    nameParagraph.textContent = srcImage.nome

    galeria.appendChild(containerDiv)
    containerDiv.appendChild(image)
    containerDiv.appendChild(nameParagraph)
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