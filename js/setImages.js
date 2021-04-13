// cards[0].querySelector(".backFace").style.backgroundImage = "url(img/Imagen1.jpg)";

// console.log(Math.round(Math.random() * 20) - 1)



window.addEventListener("load", () => {
    setImages();
    setImages();
})


function setImages() {
    let nRandom;
    let contador = 10;
    let imagen = 0;

    while (contador != 0) {
        nRandom = Math.round(Math.random() * 19);
        if (!cards[nRandom].querySelector(".backFace").classList.contains("IMG")) {
            cards[nRandom].querySelector(".backFace").classList.add("IMG")
            cards[nRandom].querySelector(".backFace").setAttribute("id", `imagen${imagen}`);
            cards[nRandom].querySelector(".backFace").style.backgroundImage = `url(img/Imagen${imagen}.jpg)`;
            contador--;
            imagen++;
        }
    }
}


///bacground music

const BGMusic = new Audio("mp3/music.mp3");
BGMusic.volume = 0.4;

const body = document.querySelector("#gameBox");

body.addEventListener("mouseover", () => {

    BGMusic.play();

})