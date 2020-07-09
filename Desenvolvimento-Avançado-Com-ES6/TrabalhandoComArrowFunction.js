// function log(value) {
// 	console.log(value);
// }

//Função Anonima
// var log = function (value) {
// 	console.log(value);
// };

// log('test');

//Arrow Functions

// Return Implícito
// var sum = (a, b) => a + b;
// com um unico argumento:
// var sum10 = a => a + 10;
// console.log(sum10(2));

//Funções Construtoras

//Funciona com functions:
// function Car() {
// 	this.foo = 'bar';
// }

// Com Arrow function não;
// var Car = () => {
// 	this.foo = 'bar';
// };

// console.log(new Car());

//Hoisting
// log('hoisting function'); //imprime hoisting function
// logArrow('arrow function'); //TypeError: logArrow is not a function
// function log(value) {
// 	console.log(value);
// }

// var logArrow = (value) => {
// 	console.log(value);
// };

var obj = {
	showContext: function showContext() {
		this.log('teste'); //imprime: teste
		setTimeout(
			function () {
				this.log('1000ms'); //TypeError: this.log is not a function
			}.bind(this), //Solução para o erro é usar o bind, para setar o escopo
			1000
		); //setTimeout é invocado no contexto global

		setTimeout(() => {
			//Arrow function tem o contexto lexico
			this.log('After 1000ms'); //Imprime: After 1000ms
		}, 1000);
	},
	log: function log(value) {
		console.log(value);
	},
};

obj.showContext();
