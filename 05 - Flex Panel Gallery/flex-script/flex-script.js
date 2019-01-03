const panels = document.querySelectorAll('.panel');

function toggleOpen() {
	this.classList.toggle('open');
}

function toggleActive(el) {
	console.log(el.propertyName);
	if (el.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}

panels.forEach(panel => {
	panel.addEventListener('click', toggleOpen);
	panel.addEventListener('transitionend', toggleActive);
});
