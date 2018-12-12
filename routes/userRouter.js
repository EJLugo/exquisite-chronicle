const userRouter = require('express').Router();
const { User, Prompt, Chapter } = require('../models');
const { sign, passport } = require('../encrypt.js');


// Get Routes

userRouter.get('/currentuser', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({msg: 'logged in', user: req.user });
});

userRouter.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByPk(id);
		res.json({
			user: {
				id: user.dataValues.id,
				username: user.dataValues.username,
			},
		});
	} catch (e) {
		res.json({ msg: e.message });
	} finally {
		process.exit();
	}
});

userRouter.get('/:userId/prompts', passport.authenticate('jwt', { session: false }),
	async (req, res) => {
		try {
			const { userId } = req.params;
			const prompts = await Prompt.findAll({
				where: {
					user_id: userId,
				},
			});
			res.json(prompts);
		} catch (e) {
			res.json({ msg: e.message });
		} finally {
			process.exit();
		}
});

userRouter.get('/:user_id/prompts/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const prompt = await Prompt.findByPk(id);
    res.json(prompt.dataValues);
  } catch (e) {
    console.error(e);
  } finally {
		process.exit();
	}
});

userRouter.get('/:user_id/chapters', async (req, res) => {
	try {
		const { user_id } = req.params;
		const chapters = await Chapter.findAll({
      where:{ user_id }
    });
    res.json(chapters.dataValues);
  } catch (e) {
    console.error(e);
  } finally {
		process.exit();
	}
});

userRouter.get('/:user_id/chapters/:id', async (req, res) => {
	try {
		const { user_id } = req.params;
		const chapter = await Chapter.findByPk(id);
    res.json(chapter.dataValues);
  } catch (e) {
    console.error(e);
  } finally {
		process.exit();
	}
});

// POST Routes
userRouter.post('/', async (req, res) => {
	try {
		const user = await User.create(req.body);
		const { id, username } = user.dataValues;
		const token = sign({
			id,
			username,
		});
		res.json({
			user: {
				username,
				id,
			},
			token,
		});
	} catch (e) {
		res.json({ msg: e.message });
	} finally {
		process.exit();
	}
});

userRouter.post('/:user_id/prompts', async (req, res) => {
	try {
		const { user_id } = req.params;
		const prompt = await Prompt.create(req.body);
    res.json(prompt.dataValues);
  } catch (e) {
    console.error(e);
	}
});

userRouter.post('/:user_id/chapters', async (req, res) => {
	try {
		const { user_id } = req.params;
		const chapter = await Chapter.create(req.body);
    res.json(chapter.dataValues);
  } catch (e) {
    console.error(e);
	}
});

// PUT Routes
userRouter.put('/:user_id/prompts', async (req, res) => {
	try {
		const newUser = await User.create(req.body);
		res.json(newUser.dataValues);
	} catch (e) {
		res.json({ msg: e.message });
	} finally {
		process.exit();
	}
});

// TODO: deleteUser route
// TODO: put user ; to update user info

module.exports = {
	userRouter,
};
