const { callbackify } = require('util');
const { resolve } = require('path');

//Promises
const doSomethingPromise = () =>
	new Promise((resolve, reject) => {
		setTimeout(function () {
			resolve('First data');
		}, 1000);
	});
const doOtherSomethingPromise = () =>
	new Promise((resolve, reject) => {
		setTimeout(function () {
			resolve('Second data');
		}, 1000);
	});

doSomethingPromise()
	.then((data) => {
		console.log(data.split(''));
		return doOtherSomethingPromise();
	})
	.then((data2) => console.log(data2.split('')));
