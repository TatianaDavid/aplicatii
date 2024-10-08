document.addEventListener("touchstart", on_touch);
document.addEventListener("mousedown", on_touch);

var recognition = new webkitSpeechRecognition();
var recognition_started = false;

function on_touch() {
    if (!recognition_started && recognition.start) {
        recognition.start();
        recognition_started = true;
    }
}

function onend() {
    recognition.stop();
    recognition_started = false;
}

recognition.onend = onend;
recognition.onsoundend = onend;
recognition.onspeechend = onend;
recognition.onresult = on_results;

function on_results(e) {
    var transcript = e.results[0][0].transcript;  // Preluăm transcriptul
    var confidence = e.results[0][0].confidence;  // Preluăm acuratețea

    document.getElementById("text").innerHTML += "Ați rostit cuvântul: " + transcript + ", acuratețe: " + confidence + "<br>";
}