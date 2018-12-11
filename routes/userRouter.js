const userRouter = require('express').Router();
const { User } = require('../models');

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
		const { id } = req.params
		const user = await User.findByPk(id);
    res.json(user.dataValues)
  } catch (e) {
    console.error(e);
  }
})

userRouter.get('/:id', async (req, res) => {
	try {
		const { id } = req.params
		const user = await User.findByPk(id);
    res.json(user.dataValues)
  } catch (e) {
    console.error(e);
  }
})
// relational querie for Users line 23-31 is placeholder content for this

module.exports = {
  userRouter
};
