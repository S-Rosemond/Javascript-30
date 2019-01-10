const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
	const p = document.querySelector('p');
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log('Hello I am a %s string!', 'second-arg'); // %s string! = % + s + string!

// Es6 Interpolation
let variable = 'variable';
console.log(`Hello I am a ${variable}`);

// Styled
// console.log(' %c I am some great text', 'font-size: 20px; background: blue');

console.log(' %c I am some great text', 'font-size: 20px;'); // %c = % + c; css props

// warning!
console.warn('OH NOOO');

// Error :|
console.error('OH NOOO!');

// Info
console.info('Fun fact');

// Testing
console.assert(1 === 2, 'That is wrong!');

// clearing
//console.clear();
//clears console

// Viewing DOM Elements
const p = document.querySelector('p');
console.dir(p);
console.clear();

// Grouping together
dogs.forEach(dog => {
	console.groupCollapsed(`${dog.name}`); //group|| groupCollapsed
	console.log(`This is ${dog.name}`);
	console.log(`This is ${dog.name} is ${dog.age} years old`);
	console.log(`This is ${dog.name} is ${dog.age * 7} dog years old`);
	console.groupEnd(`${dog.name}`);
});

// counting
console.count('count');
console.count('count');
console.count('count');

// timing
//console.time('fetching data');
// fetch=> then
//then(=>cte) cte=console.timeEnd('object')
// Alt = perfomance.now()

// console.table() <= array
