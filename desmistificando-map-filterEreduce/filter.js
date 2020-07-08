const pets = [
	{
		name: 'rex',
		type: 'dog',
		age: 10,
	},
	{
		name: 'miau',
		type: 'cat',
		age: 2,
	},
	{
		name: 'gulp',
		type: 'fish',
		age: 1,
	},
];
// ---- FORMA SIMPLES ---
// const petsNew = pets.filter((pet) => {
// 	return pet.age < 5;
// });

const eMenorQueCinco = (numero) => {
	return numero < 5;
};

const petsNew = pets.filter(({ age }) => {
	return eMenorQueCinco(age);
});

console.log(petsNew);
