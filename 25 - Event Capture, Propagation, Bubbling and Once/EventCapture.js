const divs = document.querySelectorAll('div');

function logText(e) {
	console.log(this.classList.value);
	// e.stopPropagation(); //Stops upward triggers
}

divs.forEach(div =>
	div.addEventListener('click', logText, {
		capture: false //Bubbling el => target
		// once: true //Runs once then unbinds.
	})
);
