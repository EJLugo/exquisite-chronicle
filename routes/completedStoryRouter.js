const completedStoryRouter = require('express').Router();
const { CompletedStory } = require('../models');

completedStoryRouter.get('/', async (req, res) => {
  try {
    const stories = await CompletedStory.findAll;
    res.json(stories.dataValues)
  } catch (e) {
  console.error(e);
  }
})

completedStoryRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params.id
    const story = await CompletedStory.findByPk(id);
    res.json(story.dataValues)
  } catch (e) {
  console.error(e);
  }
})

module.exports = {
  completedStoryRouter
};
