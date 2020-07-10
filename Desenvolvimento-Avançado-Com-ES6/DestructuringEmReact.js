// Utilização antiga
var arr = ['apple', 'Banana', 'Orange', ['Tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//Desctructuring Assignment
var [apple2, banana2, orange2, [tomato]] = [
	'apple',
	'Banana',
	'Orange',
	['Tomato'],
];
console.log(tomato);

var obj = {
	name: 'Júlio',
	props: {
		age: 27,
		weight: 188,
		favoriteColors: ['black', 'blue'],
	},
};
// var name = obj.name;
// var { name } = obj;
var {
	props: {
		age,
		favoriteColors: [colors1],
	},
} = obj;

console.log(colors1);
