const { getUser, createUser, allPrompts, allUserPrompts } = require('./client/src/ajax-helpers.js');

const userData = {
	username: 'cc129',
	password: 'password',
	birthday: '29 June 1998',
};

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJjYzEyOSIsImlhdCI6MTU0NDU2MDg0OH0.Pv9B7lGUJnq_tTVx9UHFZx4GpbAvtwjSUIpFfiDoRZU'

async function run() {
	try {
		// const user = await getUser(1);
		// const prompts = await allPrompts();
		const newUser = await createUser(userData);
		console.log(newUser);
		// const { token } = newUser;
		// console.log('token: ', token);
		// const user = await getUser(5, token);
		// console.log(user);
	} catch (e) {
		console.log(e);
	};
}
run();
