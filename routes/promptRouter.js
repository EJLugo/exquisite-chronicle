const promptRouter = require('express').Router();
const { Prompt } = require('../models');

promptRouter.get('/', async (req, res) => {
	try {
		const prompts = await Prompt.findAll();
		res.json(prompts);
	} catch (e) {
		console.error(e);
	}
});

promptRouter.update('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const prompt = await Prompt.create(req.body);
    res.json(prompts.dataValues);
  } catch (e) {
    res.json({ msg: e.message });
	} finally {
		process.exit();
	}
});

module.exports = {
	promptRouter,
};
