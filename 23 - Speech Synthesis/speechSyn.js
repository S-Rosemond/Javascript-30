// Loved this one! I want to comeback and expand :)

const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
	voices = this.getVoices();

	voicesDropdown.innerHTML = voices
		.map(voice => `<option value='${voice.name}'>${voice.name}(${voice.lang})</option>`)
		.join('');

	/*Optional filter after voices
        .fliter(voice => voice.lang.incldues('en'))
        */
}

function setVoice() {
	msg.voice = voices.find(fVoice => fVoice.name === this.value);
	toggleVoices();
}

function toggleVoices(startOver = true) {
	speechSynthesis.cancel();

	if (startOver) speechSynthesis.speak(msg);
}

function setOption() {
	msg[this.name] = this.value;
	toggleVoices();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);

voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));

speakButton.addEventListener('click', toggleVoices);
stopButton.addEventListener('click', toggleVoices.bind(null, false));
