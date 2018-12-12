const userRouter = require('express').Router();
const { User, Prompt, Chapter } = require('../models');
const { sign, passport } = require('../encrypt.js');


// GET current user
userRouter.get('/current-user', passport.authenticate('jwt', { session: false }), (req, res) => {
	try {
		res.json({ msg: 'logged in', user: req.user });
	} catch (e) {
		res.json({ msg: e.message });
	}
});

// Create user
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

userRouter.get('/:id', async (req, res) => {
	console.log('server get user');
	try {
		const { id } = req.params;
		const user = await User.findByPk(id);
    res.json(user.dataValues);
  } catch (e) {
    console.error(e);
  } finally {
		process.exit();
	}
});

// Protected Route
userRouter.get('/:user_id/prompts', passport.authenticate('jwt', { session: false }),
	async (req, res) => {
		try {
			const { user_id } = req.params;
			const prompts = await Prompt.findAll({
				where:{ user_id }
			});
			res.json(prompts.dataValues);
		} catch (e) {
			console.error(e);
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

userRouter.post('/', async (req, res) => {
	try {
		const newUser = await User.create(req.body);
		res.json(newUser.dataValues);
	} catch (e) {
		res.json({ msg: e.message });
	} finally {
		process.exit();
	}
});

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

module.exports = {
	userRouter,
};
