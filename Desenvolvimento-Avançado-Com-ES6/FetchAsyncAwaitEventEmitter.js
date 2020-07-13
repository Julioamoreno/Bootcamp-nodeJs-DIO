// //Fetch
// fetch('localhost:3000/data.json')
// 	.then((responseStream) => {
// 		if (responseStream.status === 200) {
// 			responseStream.json();
// 		} else {
// 			throw new Error('Request Error');
// 		}
// 	})
// 	.then((data) => console.log(data))
// 	.catch((erro) => console.log('Erro', err));

//ES7 - Async / Await
const asyncTimer = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(12345);
		}, 1000);
	});
const doubleTimer = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(246810);
		}, 2000);
	});

const simpleFunc = async () => {
	const data = await Promise.all([doubleTimer(), asyncTimer()]);
	return data;
};
simpleFunc().then((data) => {
	console.log(data);
});

//EventEmitter

const EventEmitter = require('events');
const emitter = new EventEmitter();
class Users extends EventEmitter {
	userLogged(data) {
		this.emit('User loged', data);
	}
}
emitter.on('User Logged', (data) => {
	console.log(data);
});
const users = new Users();
users.once('User Logged', (data) => {
	console.log(data);
});
users.userLogged({ user: 'Julio Armando' });
// emitter.emit('User Logged', { user: 'Júlio Armando' });
