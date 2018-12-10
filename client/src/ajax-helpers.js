import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

//GET Request
async function getUser(user_id){
	try{
		const user = await axios.get(`${BASE_URL}/user/${user_id}`);
		return user.data;
	}catch(e){
		console.log(e);
	}
};

async function allCompletedStories(){
	try{
		const allCompletedStories = await axios.get(`${BASE_URL}/stories`);
		return allCompletedStories.data;
	}catch(e){
		console.log(e);
	}
};

async function oneCompletedStory(story_id){
	try{
		const oneCompletedStory = await axios.get(`${BASE_URL}/stories/${story_id}`);
		return oneCompletedStory.data;
	}catch(e){
		console.log(e);
	}
}

async function allPrompts(){
	try{
		const allPrompts = await axios.get(`${BASE_URL}/prompts`);
		return allPrompts.data;
	}catch(e){
		console.log(e);
	}
};

async function allUserPrompts(user_id){
	try{
		const userPrompt = await axios.get(`${BASE_URL}/user/${user_id}/prompts`);
		return userPrompt.data;
	}catch(e){
		console.log(e);
	}
};

async function allUserChapters(user_id){
	try{
		const userChapter = await axios.get(`${BASE_URL}/user/${user_id}/chapters`);
		return userChapter.data;
	}catch(e){
		console.log(e);
	}
};

async function oneUserChapter(user_id, chapter_id){
	try{
		const userChapter = await axios.get(`${BASE_URL}/user/${user_id}/chapters/${chapter_id}`);
		return userChapter.data;
	}catch(e){
		console.log(e);
	}
};

module.exports ={
	getUser,
	allCompletedStories,
	oneCompletedStory,
	allPrompts,
	allUserPrompts,
	allUserChapters,
	oneUserChapter,
};
