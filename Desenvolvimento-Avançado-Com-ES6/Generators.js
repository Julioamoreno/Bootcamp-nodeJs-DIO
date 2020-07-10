//Generators

// function* hello() {
// 	console.log('Hello');
// 	const value = yield 1;
// 	console.log(value);
// 	yield 2;
// 	console.log('Function');
// }

// const it = hello();

// it.next();
// it.next('ONE');
// it.next();

// function* naturalNumber() {
// 	let number = 0;
// 	while (true) {
// 		yield number;
// 		number++;
// 	}
// }
// const it = naturalNumber();
// console.log(it.next()); //0
// console.log(it.next()); //1
// console.log(it.next()); //2

const obj = {
	values: [1, 2, 3, 4],
	*[Symbol.iterator]() {
		for (var i = 0; i < this.values.length; i++) {
			yield this.values[i];
		}
	},
};

for (const value of obj) {
	console.log(value);
}
