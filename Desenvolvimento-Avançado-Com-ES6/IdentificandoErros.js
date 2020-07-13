class CustomError extends Error {
	constructor({ message, data }) {
		super(message);
		this.data = data;
	}
}

try {
	const name = 'Júlio Armando';

	const myError = new CustomError({
		message: 'Custom messagem on custom error',
		data: {
			type: 'Server error',
		},
	});

	throw myError;
} catch (err) {
	if (err.data.type === 'Server Error') {
	} else {
	}
} finally {
	console.log('Keep going...');
}
