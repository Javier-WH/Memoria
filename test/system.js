const carta = document.querySelector(".carta");
const adelante = document.querySelector(".adelante");
const atras = document.querySelector(".atras");
const FLIP_TIME = 2500;

// carta.addEventListener("click", () => {
//     adelante.classList.remove("adelanteRegresar");
//     atras.classList.remove("atrasRegresar");


//     adelante.classList.add("adelanteGirar");
//     atras.classList.add("atrasGirar");

//     setTimeout(() => {
//         adelante.classList.remove("adelanteGirar");
//         atras.classList.remove("atrasGirar");

//         adelante.classList.add("adelanteRegresar");
//         atras.classList.add("atrasRegresar");
//     }, FLIP_TIME);

// })


let isFlipped = false;
carta.addEventListener("click", () => {
    if (!isFlipped) {
        adelante.classList.remove("adelanteRegresar");
        atras.classList.remove("atrasRegresar");
        adelante.classList.add("adelanteGirar");
        atras.classList.add("atrasGirar");
        isFlipped = true;
    } else {
        adelante.classList.remove("adelanteGirar");
        atras.classList.remove("atrasGirar");
        adelante.classList.add("adelanteRegresar");
        atras.classList.add("atrasRegresar");
        isFlipped = false;
    }
})