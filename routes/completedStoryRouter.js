const completedStoryRouter = require('express').Router();
const { CompletedStory, Prompt, Chapter } = require('../models');
const { passport } = require('../encrypt.js');

// Get all user's stories
completedStoryRouter.get('/user-stories', passport.authenticate('jwt', { session: false }), async (req, res) => {
	try {
		const stories = await CompletedStory.findAll({
			where: {
				creator: req.user.id,
			},
		});
		res.json(stories);
	} catch (e) {
		res.json({ msg: e.message });
	}
});

// GET all completed stories by genre
completedStoryRouter.get('/:genre', async (req, res) => {
	try {
		const { genre } = req.params;
		const stories = await CompletedStory.findAll({
			where: {
				genre,
			},
		});
		res.json(stories);
	} catch (e) {
		res.json({ msg: e.message });
	}
});

// GET one completed story
completedStoryRouter.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const story = await CompletedStory.findByPk(id);
		res.json(story);
	} catch (e) {
		res.json({ msg: e.message });
	}
});

// POST new story
completedStoryRouter.post('/create', passport.authenticate('jwt', { session: false }), async (req, res) => {
	try {
		const prompt = await Prompt.findByPk(req.body.prompt_id);
		const chapters = await Chapter.findAll({
			where: {
				prompt_id: prompt.id,
			},
		});
		const contributorsArr = chapters.map(chapter => chapter.user_id);
		const contributors = contributorsArr.join();
		const bodyArr = chapters.map(chapter => `${chapter.body}. `);
		const body = bodyArr.join();
		const story = await CompletedStory.create({
			title: prompt.body,
			genre: prompt.genre,
			creator: prompt.user_id,
			body,
			contributors,
		});
		res.json(story);
	} catch (e) {
		res.json({ msg: e.message });
	}
});

module.exports = {
	completedStoryRouter,
};
