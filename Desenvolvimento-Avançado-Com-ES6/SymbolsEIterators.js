// //Symbols
// const uniqueID = Symbol('Hello'); //criaçao com um valor
// const uniqueID2 = Symbol('Hello'); //criaçao de outro symbol com um mesmo valor
// // console.log(uniqueID === uniqueID2); //retorna false

// const objeto = {
// 	[uniqueID]: 'EWKRRR',
// };
// console.log(objeto);

//Well known symbols

// Symbol.iterator;
// Symbol.split;
// Symbol.toStringTag;

// const arr = [1, 2, 3, 4];
// const it = arr[Symbol.iterator]();
// // console.log(it.next());
// // console.log(it.next());
// // console.log(it.next());
// for (const value of it) {
// 	console.log(value);
// }

//Criando função iteradora em um objeto
// const obj = {
// 	values: [1, 2, 3, 4],
// 	[Symbol.iterator]() {
// 		let i = 0;

// 		return {
// 			next: () => {
// 				i++;
// 				return {
// 					value: this.values[i - 1],
// 					done: i > this.values.length,
// 				};
// 			},
// 		};
// 	},
// };
// for (const value of obj) {
// 	console.log(value);
// }
