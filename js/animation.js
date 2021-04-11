const cards = document.getElementsByClassName("card");
let card1Index, card2Index, cardsSelected = 0;

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
        flipCards(i);
        getCardsIndex(i);
    })
}


function flipCards(index) {

    if (!cards[index].querySelector(".frontFace").classList.contains("DISCOVERED")) { ///////////////////
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


//////////////////////////////////////////////////////////////////////////////////////

function getCardsIndex(index) {
    cardsSelected++;


    if (cardsSelected === 1) {
        card1Index = index;
    } else if (cardsSelected == 2) {
        card2Index = index;
    }
}