const axios = require('axios');

const BASE_URL = 'http://localhost:3001';

//GET Request
async function getUser(user_id){
	try{
		const user = await axios.get(`${BASE_URL}/users/${user_id}`, {
			headers:{
				'Authorization': `Bearer${token}`
			}
		});
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

//POST Request
async function createUser(user_data){
	console.log('ajax', user_data);
	try{
		const user = await axios.post(`${BASE_URL}/users`, user_data);
		return user.data;
	}catch(e){
		console.log(e);
	}
};

async function createPrompt(user_id, prompt_data){
	try{
		const prompt = await axios.post(`${BASE_URL}/user/${user_id}/prompts`, prompt_data);
		return prompt.data;
	}catch(e){
		console.log(e);
	}
};

async function createChapter(prompt_id, chapter_data){
	try{
		const chapter = await axios.post(`${BASE_URL}/prompts/${prompt_id}/chapters`);
		return chapter.data;
	}catch(e){
		console.log(e);
	}
};

async function createCompletedStory(story_data){
	try{
		const story = await axios.post(`${BASE_URL}/stories`, story_data);
		return story.data;
	}catch(e){
		console.log(e);
	}
};

//PUT Request
async function updateUser(user_id, user_data){
	try{
		const updatedUser = await axios.put(`${BASE_URL}/users/${user_id}`, user_data);
		return updatedUser;
	}catch(e){
		console.log(e);
	}
};

async function addChapterToPrompt(prompt_id, user_id, chapter_id){
	try{
		const chapter_data = await oneUserChapter(user_id, chapter_id);
		const updatedPrompt = await axios.put(`${BASE_URL}/prompts/${prompt_id}`, chapter_data);
		return updatedPrompt.data;
	}catch(e){
		console.log(e);
	}
};

//DELETE Request
async function deleteUser(user_id){
	try{
		const deletedUser = await axios.delete(`${BASE_URL}/users/${user_id}`);
		return deletedUser;
	}catch(e){
		console.log(e);
	}
};

async function deleteUserPrompt(user_id, prompt_id){
	try{
		const deletedPrompt = await axios.delete(`${BASE_URL}/users/${user_id}/prompts/${prompt_id}`);
		return deletedPrompt;
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
	createUser,
	createPrompt,
	createChapter,
	createCompletedStory,
	updateUser,
	addChapterToPrompt,
	deleteUser,
	deleteUserPrompt,
};
