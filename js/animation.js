const cards = document.getElementsByClassName("card");
const showCards = 2500;
let card1Index, card2Index, cardsSelected = 0;
let aciertos = 0,
    intentos = 0;

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
        flipCards(i);
        getCardsIndex(i);
    })
}


function flipCards(index) {

    if (!cards[index].querySelector(".frontFace").classList.contains("DISCOVERED") && cardsSelected < 2) { ///////////////////
        if (!cards[index].querySelector(".frontFace").classList.contains("flipped")) {
            cards[index].querySelector(".frontFace").classList.remove("frontFaceGetBack");
            cards[index].querySelector(".backFace").classList.remove("backFaceGetBack");
            cards[index].querySelector(".frontFace").classList.add("frontFaceSpin", "flipped");
            cards[index].querySelector(".backFace").classList.add("backFaceSpin");
        } else {
            cards[index].querySelector(".frontFace").classList.remove("frontFaceSpin", "flipped");
            cards[index].querySelector(".backFace").classList.remove("backFaceSpin");
            cards[index].querySelector(".frontFace").classList.add("frontFaceGetBack");
            cards[index].querySelector(".backFace").classList.add("backFaceGetBack");
        }
    }
}



function getCardsIndex(index) {
    cardsSelected++;

    if (cardsSelected == 1) {
        card1Index = index;
        cards[card1Index].style.pointerEvents = "none";

    } else if (cardsSelected == 2) {
        card2Index = index;
        let imagen1 = cards[card1Index].querySelector(".backFace").id;
        let imagen2 = cards[card2Index].querySelector(".backFace").id;
        cardsSelected = 0;
        document.querySelector("*").style.pointerEvents = "none";

        if (imagen1 == imagen2 && !cards[card1Index].querySelector(".frontFace").classList.contains("DISCOVERED") && !cards[card2Index].querySelector(".frontFace").classList.contains("DISCOVERED")) {
            cards[card1Index].querySelector(".frontFace").classList.add("DISCOVERED");
            cards[card2Index].querySelector(".frontFace").classList.add("DISCOVERED");
            aciertos++;
            console.log(aciertos);

            ////esto corrige un bug que permitia mostrar 3 cartas si se presionaba rapidamente click sobre las cartas
            cardsSelected = 1000;
            setTimeout(() => {
                cardsSelected = 0;
                cards[card1Index].style.pointerEvents = "auto";
                document.querySelector("*").style.pointerEvents = "auto";
            }, 300);
            ////////////////////////////////////////////////////////////////////////////////////
        } else {
            intentos++;
            document.getElementById("marcador").innerText = `Intentos: ${intentos}`
            cardsSelected = 1000;
            setTimeout(() => {
                cardsSelected = 0;
                flipCards(card1Index);
                flipCards(card2Index);
                cards[card1Index].style.pointerEvents = "auto";
                document.querySelector("*").style.pointerEvents = "auto";
            }, showCards);
        }


    }
}