const completedStoryRouter = require('express').Router();
const { Completed_Story } = require('../models');

// GET all completed stories
completedStoryRouter.get('/', async (req, res) => {
	try {
		const stories = await Completed_Story.findAll;
		res.json(stories.dataValues)
  } catch (e) {
  console.error(e);
  }
})

// GET one story
completedStoryRouter.get('/:id', async (req, res) => {
	try {
		const { id } = req.params.id
    const story = await Completed_Story.findByPk(id);
    res.json(story.dataValues)
  } catch (e) {
  console.error(e);
  }
})

module.exports = {
  completedStoryRouter
};
