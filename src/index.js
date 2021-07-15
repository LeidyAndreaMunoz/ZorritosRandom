import { registerImage } from "./lazy";

const maximum = 122;
const minimum = 1;


const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {

    const container = document.createElement('div')
    container.className = "p-4 bg-gradient-to-r from-red-200 rounded-2xl m-px";

    const imagen = document.createElement('img')
    imagen.className = "mx-auto rounded-2xl";
    imagen.width= '320'
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen)

    return container;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images");

const containerImages = document.querySelector('#images');

const addButton = document.querySelector('#Add_button')
const addImage = () => {
    const newImage = createImageNode();
    mountNode.appendChild(newImage);
    registerImage(newImage);
};

const cleanButton = document.querySelector('#reset')
const cleanImages = () => {
    containerImages.innerHTML = " ";
};

addButton.addEventListener("click", addImage);
cleanButton.addEventListener("click", cleanImages);
