const init = () => {
    declareElements();
} 

const declareElements = () => {
    let btn_w = document.querySelector(".w");
    let btn_a = document.querySelector(".a");
    let btn_s = document.querySelector(".s");
    let btn_d = document.querySelector(".d");
    let btn_j = document.querySelector(".j");
    let btn_k = document.querySelector(".k");
    let btn_l = document.querySelector(".l");

    btn_w.addEventListener("click", () => {
        let audio = new Audio("sounds/crash.mp3");
        audio.play();
    })
    btn_a.addEventListener("click", () => {
        let audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    })
    btn_s.addEventListener("click", () => {
        let audio = new Audio("sounds/snare.mp3");
        audio.play();
    })
    btn_d.addEventListener("click", () => {
        let audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    })
    btn_j.addEventListener("click", () => {
        let audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    })
    btn_k.addEventListener("click", () => {
        let audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    })
    btn_l.addEventListener("click", () => {
        let audio1 = new Audio("sounds/tom-4.mp3");
        audio1.play();
    })
}







init();