const { getUser, createUser, allPrompts, allUserPrompts } = require('./client/src/ajax-helpers.js');

const userData = {
	username: 'cc129',
	password: 'password',
	birthday: '29 June 1998',
};

async function run() {
	try {
		// const user = await getUser(1);
		// const prompts = await allPrompts();
		const newUser = await createUser(userData);
		console.log(newUser);
	} catch (e) {
		console.log(e);
	}
}
run();
