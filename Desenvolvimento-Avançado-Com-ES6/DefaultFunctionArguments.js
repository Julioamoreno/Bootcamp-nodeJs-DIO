// function multiply(a, b = 1) {
// 	// b = b || 1; //Gera erro ao tentar multiplicar por 0
// 	// b = typeof b === 'undefined' ? 1 : b; //Muito Verboso
// 	return a * b;
// }

// //Pode ser uma variavel
// function multiply(a, b = a) {
// 	return a * b;
// }
// console.log(multiply(5));

//Lazy evaluation
function randomNumber() {
	return Math.random() * 10;
}
// O valor Default vair ser um numero randômico,
//gerado toda vez que a funçao for chamadaW
function multiply(a, b = randomNumber()) {
	return a * b;
}
console.log(multiply(5));
