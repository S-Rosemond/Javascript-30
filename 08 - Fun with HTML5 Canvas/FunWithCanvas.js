const canvas = document.getElementById('draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(el) {
	if (!isDrawing) return;
	console.log(el);
	context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	context.beginPath();
	// start from
	context.moveTo(lastX, lastY);
	// go to
	context.lineTo(el.offsetX, el.offsetY);
	context.stroke();
	[lastX, lastY] = [el.offsetX, el.offsetY];
	hue++;
	if (hue >= 360) {
		hue = 0;
	}

	if (context.lineWidth >= 100 || context.lineWidth <= 1) {
		direction = !direction;
	}
	direction ? context.lineWidth++ : context.lineWidth--;
}

canvas.addEventListener('mousedown', el => {
	isDrawing = true;
	[lastX, lastY] = [el.offsetX, el.offsetY];
});
canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
