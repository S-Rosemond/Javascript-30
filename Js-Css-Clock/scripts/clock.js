const secondsCount = now => {
	const secondHand = document.querySelector('.second-hand');
	const seconds = now.getSeconds();
	const secondsDegrees = seconds / 60 * 360 + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
};
const minCount = now => {
	const minHand = document.querySelector('.min-hand');
	const mins = now.getMinutes();
	const minsDegrees = mins / 60 * 360 + 90;
	minHand.style.transform = `rotate(${minsDegrees}deg)`;
};

const hourCount = () => {
	let timeNow = new Date();
	const hourHand = document.querySelector('.hour-hand');

	const hour = timeNow.getHours();

	const hourDegrees = hour + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

	console.log(hour);
};

const setDate = () => {
	const now = new Date();
	secondsCount(now);
	minCount(now);
	hourCount();
};
setInterval(setDate, 1000);
