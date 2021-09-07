const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const greetings = ["I'm good", "Doing good!", "Leave me alone"];
const weather = ["Weather is fine", "You need vitamin D"];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recgnition = new SpeechRecognition();

recgnition.onstart = () => {
    console.log("activted voice");
};

recgnition.onresult = (event) => {
    console.log(event);
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;

    content.textContent = transcript;

    readOutLoud(transcript);
};

btn.addEventListener("click", () => {
    recgnition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    const  voices = speechSynthesis.getVoices();
    speech.voice = voices[2];
    
    speech.text = "I don't know!!!";

    if(message.includes("how are you")) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];

        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
};
//Shashank
//Shashank 2
//Sanket Raikwar Edit
//Sanket Raikwar edit2
//Shashank 3
//Shubham Shrivas edit 0709 at 21.47
// Shashank 4
