const chapterRouter = require('express').Router();
const { Chapter, Prompt } = require('../models');
const { passport } = require('../encrypt.js');

// POST new chapter
chapterRouter.post('/create', passport.authenticate('jwt', { session: false }), async (req, res) => {
	try {
		const { user } = req;
		const prompt = await Prompt.findByPk(req.body.prompt_id);
		const chapter = await Chapter.create({
			body: req.body.body,
			user_id: user.id,
			prompt_id: req.body.prompt_id,
		});
		const promptsChapters = await Chapter.findAll({
			where: {
				prompt_id: req.body.prompt_id,
			},
		});
		console.log('max chapters: ', prompt.max_chapters);
		console.log('current length: ', promptsChapters.length);
		if (promptsChapters.length >= prompt.max_chapters) {
			res.json({ chapter, story: true });
		} else {
			res.json(chapter);
		}
	} catch (e) {
		res.json({ msg: e.message });
	}
});

// Get all prompt's chapters
chapterRouter.get('/prompt/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
	try {
		const chapters = await Chapter.findAll({
			where: {
				prompt_id: req.params.id,
			},
		});
		res.json(chapters);
	} catch (e) {
		res.json({ msg: e.message });
	}
});

// Get all user's chapters
chapterRouter.get('/user-chapters', passport.authenticate('jwt', { session: false }), async (req, res) => {
	try {
		const { user } = req;
		const chapters = await Chapter.findAll({
			where: {
				user_id: user.id,
			},
		});
		res.json(chapters);
	} catch (e) {
		res.json({ msg: e.message });
	}
});

// GET One chapter
chapterRouter.get('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
	try {
		const story = await Chapter.findByPk(req.params.id);
		res.json(story.dataValues);
	} catch (e) {
		res.json({ msg: e.message });
	}
});


module.exports = {
	chapterRouter,
};
