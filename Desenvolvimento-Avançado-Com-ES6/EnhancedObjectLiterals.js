//Maneira clássica de escrever obj literais
// var prop2 = 'DIO';
// var obj = {
// 	prop1: 'Digital Innovation One',
// 	prop2, //Não necessario mais reescrever o mesmo nome 2 vezes
// };
// console.log(obj);

// var obj = {
//     //Tradicional
// 	sum: function sum(a, b) {
// 		return a + b;
//     },
//     //Encurtada
// 	multiply(a, b) {
// 		return a * b;
// 	},
// };
// console.log(obj.multiply(2, 2));

var propName = 'test';
//Tradicional
// var obj = {};
// obj[propName] = 'Prop Value';

//Encurtada
var obj = {
	[propName + 'concat']: 'Prop Value',
};
console.log(obj);
