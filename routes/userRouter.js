const userRouter = require('express').Router();
const { User, Prompt, Chapter } = require('../models');

userRouter.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByPk(id);
    res.json(user.dataValues);
  } catch (e) {
    console.error(e);
  }
})

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
		const { user_id } = req.params;
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

// TODO: POST new user
//POST new prompt
//POST new chapter 

module.exports = {
  userRouter
};
