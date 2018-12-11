const userRouter = require('express').Router();
const { User, Prompt, Chapter } = require('../models');

userRouter.get('/', async (req, res) => {
  try {
    const users = await User.findAll;
    res.json(users.dataValues)
  } catch (e) {
  console.error(e);
  }
})

userRouter.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByPk(id);
    res.json(user.dataValues);
  } catch (e) {
    console.error(e);
  }
})

// relational querie for Users line 23-31 is placeholder content for this

userRouter.get('/:user_id/prompts', async (req, res) => {
	try {
		const { user_id } = req.params;
		const prompts = await Prompt.findAll({
      where:{ user_id }
    });
    res.json(prompts.dataValues);
  } catch (e) {
    console.error(e);
  }
})

userRouter.get('/:user_id/prompts/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const prompt = await Prompt.findByPk(id);
    res.json(prompt.dataValues);
  } catch (e) {
    console.error(e);
  }
})

userRouter.get('/:user_id/chapters', async (req, res) => {
	try {
		const { user_id } = req.params.user_id;
		const chapters = await Chapter.findAll({
      where:{ user_id }
    });
    res.json(chapters.dataValues);
  } catch (e) {
    console.error(e);
  }
})
userRouter.get('/:user_id/chapters/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const chapter = await Chapter.findByPk(id);
    res.json(chapter.dataValues);
  } catch (e) {
    console.error(e);
  }
})

module.exports = {
  userRouter
};
