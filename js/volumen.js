const Vbar = document.getElementById("volumenBar");
const VIcon = document.getElementById("volumenIcon");



function setVolumen(){
    BGMusic.volume = (Vbar.value /50);
    sound.volume =  (Vbar.value /50);
    sound2.volume =  (Vbar.value /50);
}

Vbar.addEventListener("input", ()=>setVolumen());


let volumenPrev;
VIcon.addEventListener("click", ()=>{

    if(Vbar.value != 0){
        volumenPrev = Vbar.value
        Vbar.value = 0;
    }
    else{
        Vbar.value=volumenPrev;
    }
    setVolumen();

})
