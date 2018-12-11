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

module.exports = {
  promptRouter,
};
