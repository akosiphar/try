alert("Please wear earphones 😊");
yourName = prompt("State your name");

let i = 0;
let txt_two = 'I assume you have guessed it right away through the music that is playing and the date you are reading this... \n and yeah, what you are thinking right now is correct. I might caught you off-guard or you are expecting this. but anyways,'; /* The text */
let txt_three = "I mustered all my courage to send you this, because I'm afraid that if I don't do it right now, it may be a long time again to do this and might regret it later on, so here I am praying and hoping to get a positive feedback hihi."; 
let txt_four = "Hello Its me";
let speed = 50; /* The speed/duration of the effect in milliseconds */
let speedtwo = 100; /* The speed/duration of the effect in milliseconds */

let openbtn = document.querySelector('.btn-open');
let modal = document.querySelector('dialog');
let wrapper = document.querySelector('.modal-wrapper');
let hello = document.querySelector('.hello');

hello.innerHTML = `Hi, ${yourName}`;


function pagetwo() {
    if (i < txt_two.length) {
        document.querySelector(".p-two").innerHTML += txt_two.charAt(i);
    }

    if (i < txt_three.length) {
        document.querySelector(".p-three").innerHTML += txt_three.charAt(i);
    }
    i++;
    setTimeout(pagetwo, 50)
}





function pagethree() {
    if (i < txt_three.length) {
        document.querySelector(".p-three").innerHTML += txt_three.charAt(i);
        i++;
        setTimeout(pagethree, speedtwo);
    }
}

openbtn.addEventListener('click', () => {
    modal.showModal();
    modal.style.animation = 'fadeInUp 1s';
})

/* Audio Function */
const playerButton = document.querySelector('.player-button'),
audio = document.querySelector('audio'),
playIcon = 
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>`,
pauseIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>`;

function toggleAudio () {
if (audio.paused) {
audio.play();
playerButton.innerHTML = pauseIcon;
} else {
audio.pause();
playerButton.innerHTML = playIcon;
}

playerButton.currentTime = 300;
}

playerButton.addEventListener('click', toggleAudio);
