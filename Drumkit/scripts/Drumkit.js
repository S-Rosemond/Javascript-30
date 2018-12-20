function playSound(el) {
	const keys = document.querySelectorAll('.btn-keys');

	const audio = document.querySelector(`audio[data-key="${el.keyCode}"]`);

	if (!audio) return;

	const addPlay = document.querySelector(`.btn-keys[data-key="${el.keyCode}"]`);

	audio.currentTime = 0; //rewind
	audio.play();
	addPlay.classList.add('playing');

	function removeTransition(event) {
		if (event.propertyName !== 'transform') return;

		this.classList.remove('playing');
	}

	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}

window.addEventListener('keydown', playSound);
