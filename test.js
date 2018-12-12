const { getUser, createUser, allPrompts, allUserPrompts } = require('./client/src/ajax-helpers.js');
const axios = require('axios')
const userData = {
	username: 'cc129',
	password: 'password',
	birthday: '29 June 1998',
};

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywidXNlcm5hbWUiOiJjYzEyOSIsImlhdCI6MTU0NDU4MDcwNX0.Bcq25fgaqS4gCF96JJXKREetV23LdUpPuitvrxQTSWY'

async function getCurrentUser(){
	const user = await axios.get('http://localhost:3001/users/currentuser', {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	})
	console.log(user);
}

async function run() {
	try {
		// const newUser = await createUser(userData);
		// const newUser = await getUser(5)
		// const { token } = newUser
		// console.log(newUser);
		// console.log(token);
		// const userPrompts = await allUserPrompts(7);
		// console.log(userPrompts);
		getCurrentUser();
	} catch (e) {
		console.log(e);
	}
}
run();
