const promptRouter = require('express').Router();
const { Prompt } = require('../models');
const { passport } = require('../encrypt.js');

// GET all prompts by genre
promptRouter.get('/:genre', async (req, res) => {
	try {
		const { genre } = req.params;
		const prompts = await Prompt.findAll({
			where: {
				genre,
			},
		});
		res.json(prompts);
	} catch (e) {
		res.json({ msg: e.message });
	}
});

// GET one prompt by id
promptRouter.get('/:id', async (req, res) => {
	try {
		const prompt = await Prompt.findByPk(req.params.id);
		res.json(prompt.dataValues);
	} catch (e) {
		res.json({ msg: e.message });
	}
});

// GET all user's prompts
promptRouter.post('/user-prompts', passport.authenticate('jwt', { session: false }), async (req, res) => {
	try {
		const { user } = req;
		const prompts = await Prompt.findAll({
			where: {
				user_id: user.id,
			},
		});
		res.json(prompts);
	} catch (e) {
		res.json({ msg: e.message });
	}
});

// Create new prompt
promptRouter.post('/create', passport.authenticate('jwt', { session: false }), async (req, res) => {
	try {
		const { user } = req;
		const newPrompt = await Prompt.create({
			genre: req.body.genre,
			body: req.body.body,
			max_chapters: req.body.max_chapters,
			chapter_length: req.body.chapter_length,
			user_id: user.id,
		});
		res.json({ msg: `Prompt ${newPrompt.id} created.` });
	} catch (e) {
		res.json({ msg: e.message });
	}
});

// Update prompt
promptRouter.put('/:id/update', passport.authenticate('jwt', { session: false }), async (req, res) => {
	try {
		const { id } = req.params;
		const { user } = req;
		const prompt = await Prompt.findByPk(id);
		if (user.id === prompt.user_id) {
			prompt.update({
				genre: req.body.genre,
				body: req.body.body,
				max_chapters: req.body.max_chapters,
				hapter_length: req.body.chapter_length,
			});
			prompt.save();
			res.json({ msg: `Prompt ${id} updated` });
		} else {
			throw Error("Cannot update another user's prompt");
		}
	} catch (e) {
		res.json({ msg: e.message });
	}
});

// Delete prompt
promptRouter.delete('/:id/delete', passport.authenticate('jwt', { session: false }), async (req, res) => {
	try {
		const { id } = req.params;
		const { user } = req;
		const prompt = await Prompt.findByPk(id);
		if (user.id === prompt.user_id) {
			prompt.destroy();
			res.json({ msg: `Prompt ${id} deleted` });
		} else {
			throw Error("Cannot delete another user's prompt");
		}
	} catch (e) {
		res.json({ msg: e.message });
	}
});

module.exports = {
	promptRouter,
};
