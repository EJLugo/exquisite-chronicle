const promptRouter = require('express').Router();
const { Prompt } = require('../models');

promptRouter.get('/', async (req, res) => {
  try {
    const prompts = await Prompt.findAll();
    res.json(prompts.dataValues);
  } catch (e) {
  console.error(e);
  }
});

addChapterToPrompt.put('/', async (req, res) => {
	try {
		const { id } = req.params;
		const prompt = await Chapter.create(req.body);
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
