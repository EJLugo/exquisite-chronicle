import axios from 'axios';

BASE_URL = 'http://localhost:3001';

//GET Request
async function getUser(user_id){
	try{
		const user = await axios.get(`${BASE_URL}/user/${user_id}`);
		return user.data;
	}catch(e){
		console.log(e);
	}
};

async function getCompletedStories(){
	try{
		const allCompletedStories = await axios.get(`${BASE_URL}/stories`);
	}catch(e){
		console.log(e);
	}
};

module.exports ={
	getUser,
	getCompletedStories,
};
