let speech = new SpeechSynthesisUtterance();
let button = document.querySelector("button");
let speechtxt = document.querySelector("textarea");
let voiceSelect = document.querySelector("select");

let voices = [];

// Load available voices
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();

    voices.forEach(function (voice, i) {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

// Change voice when the user selects a different option
voiceSelect.addEventListener("change", function () {
    speech.voice = voices[voiceSelect.value];
});

button.addEventListener("click", function () {
    let txt = speechtxt.value;

    speech.text = txt;
    window.speechSynthesis.speak(speech);
});

function pauseSpeech() {
    window.speechSynthesis.pause();
}

function resumeSpeech() {
    window.speechSynthesis.resume();
}

function stopSpeech() {
    window.speechSynthesis.cancel();
}
