const axios = require('axios');

const BASE_URL = 'http://localhost:3001';

// User Router ***********************************

// User Login
export async function login(user_data){
	try {
		const user = await axios.post(`${BASE_URL}/users/login`, user_data);
		return user;
	} catch (e) {
		console.log(e);
	}
};

// User Sign up - create user
export async function createUser(user_data){
	try{
		const user = await axios.post(`${BASE_URL}/users/signup`, user_data);
		return user;
	}catch(e){
		console.log(e);
	}
};

// Get current user
export async function getCurrentUser(token){
	try {
		const currentUser = await axios.get(`${BASE_URL}/users/currentuser`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		return currentUser;
	} catch(e) {
		console.log(e);
	}
}

// Update user info
export async function updateUser(user_data){
	try{
		const updatedUser = await axios.put(`${BASE_URL}/users/update`, user_data);
		return updatedUser;
	}catch(e){
		console.log(e);
	}
};

// Delete user
export async function deleteUser(user_id){
	try{
		const deletedUser = await axios.delete(`${BASE_URL}/users/${user_id}`);
		return deletedUser;
	}catch(e){
		console.log(e);
	}
};

//Prompt Router **********************************

// Get all prompts by genre
export async function allPrompts(token, genre){
	try{
		const allPrompts = await axios.get(`${BASE_URL}/prompts/${genre}`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		return allPrompts.data;
	}catch(e){
		console.log(e);
	}
};

// Get one prompt by id
export async function getOnePrompt(id){
	try {
		const prompt = await axios.get(`${BASE_URL}/prompts/${id}`);
		return prompt;
	} catch(e) {
		console.log(e);
	}
}

// Get all user's prompts
export async function allUserPrompts(token){
	try{
		const userPrompt = await axios.get(`${BASE_URL}/prompts/user-prompts`, {
			headers: {
				'Authorization': `Bearer ${token}`
			},
		});
		return userPrompt.data;
	}catch(e){
		console.log(e);
	}
};

// Create new prompt
export async function createPrompt(token, prompt_data){
	try{
		const prompt = await axios.post(`${BASE_URL}/prompts/create`, prompt_data, {
			headers: {
				'Authorization': `Bearer ${token}`
			},
		});
		return prompt.data;
	}catch(e){
		console.log(e);
	}
};

// Update Prompt
export async function updatePrompt(token, prompt_id, prompt_data){
	try{
		const updatedPrompt = await axios.put(`${BASE_URL}/prompts/${prompt_id}/update`, prompt_data, {
			headers:{
				'Authorization': `Bearer ${token}`
			}
		});
		return updatedPrompt.data;
	}catch(e){
		console.log(e);
	}
};

// Delete Prompt
export async function deleteUserPrompt(token, prompt_id){
	try{
		const deletedPrompt = await axios.delete(`${BASE_URL}/prompts/${prompt_id}/delete`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		return deletedPrompt;
	}catch(e){
		console.log(e);
	}
};

// Chapter Router **********************************

// Get all prompt's chapters
export async function allPromptsChapters(token, prompt_id){
	try {
		const chapters = await axios.get(`${BASE_URL}/chapters/${prompt_id}`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		return chapters;
	} catch (e){
		console.log(e);
	}
}

// Get one chapter
export async function oneUserChapter(token, chapter_id){
	try{
		const userChapter = await axios.get(`${BASE_URL}/chapters/${chapter_id}`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		return userChapter.data;
	}catch(e){
		console.log(e);
	}
};

// Get all user's chapters
export async function allUserChapters(token){
	try{
		const userChapter = await axios.get(`${BASE_URL}/chapters/user-chapters`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		return userChapter.data;
	}catch(e){
		console.log(e);
	}
};

// Post new chapter
export async function createChapter(token, chapter_data){
	try{
		const chapter = await axios.post(`${BASE_URL}/chapters/create`, chapter_data, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		return chapter.data;
	}catch(e){
		console.log(e);
	}
};

// Story Router *************************************

// Get all completed stories by genre
export async function allCompletedStories(genre){
	try{
		const allCompletedStories = await axios.get(`${BASE_URL}/stories/${genre}`);
		return allCompletedStories.data;
	}catch(e){
		console.log(e);
	}
};

// Get one completed story by id
export async function oneCompletedStory(story_id){
	try{
		const oneCompletedStory = await axios.get(`${BASE_URL}/stories/${story_id}`);
		return oneCompletedStory.data;
	}catch(e){
		console.log(e);
	}
}

// Create new story
export async function createCompletedStory(token, prompt_id){
	const data = {prompt_id: prompt_id}
	try{
		console.log('ajax');
		const story = await axios.post(`${BASE_URL}/stories/create`, data, {
			headers: {
				'Authorization': 	`Bearer ${token}`
			}
		});
		return story.data;
	}catch(e){
		console.log(e);
	}
};

// GET all user's stories
export async function allUserStories(token){
	try {
		const stories = await axios.get(`${BASE_URL}/stories/user-stories`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		return stories.data;
	} catch (e) {
		console.log(e);
	}
};
