const boxKey = document.querySelectorAll('.box');

window.addEventListener('keydown', key => {
	// console.log(`key pressed: ${key.key}`, key);
	const audio = document.querySelector(`audio[data-key="${key.keyCode}"]`);
	if (!audio) return;
	// console.log(audio);
	const box = document.querySelector(`.box[data-key="${key.keyCode}"]`);
	audio.currentTime = 0; //rewind
	audio.play();
	// console.log(box);
	box.classList.add('playing');
	box.classList.remove('playing');
});
