const promptRouter = require('express').Router();
const { Prompt } = require('../models');

// GET all prompts
promptRouter.get('/', async (req, res) => {
	try {
		const prompts = await Prompt.findAll();
		res.json(prompts);
	} catch (e) {
		console.error(e);
	}
});

module.exports = {
	promptRouter,
};
