const { getUser, createUser, allPrompts, allUserPrompts, createPrompt } = require('./client/src/ajax-helpers.js');

const userData = {
	username: 'cc129',
	password: 'password',
	birthday: '29 June 1998',
};
const promptData = {
	genre: 'test',
	body: 'this is a test',
}
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJjYzEyOSIsImlhdCI6MTU0NDYyNjEzMn0.mnjcdmDjFFO4xmWRJR_fRGKon
hTzrEpEQne7XOWdrAY';

async function run() {
	try {
		// const newUser = await createUser(userData);
		// const { token } = newUser;
		const currentUser = await getUser(token);
		console.log(currentUser);
	} catch (e) {
		console.log(e);
	}
}
run();

// Create a user, return a token for that user. Store the token.
// Make a request to a restricted route without a bearer token. Should get 401
// Make the request with a bearer token
