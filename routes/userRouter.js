const userRouter = require('express').Router();
const { User } = require('../models');
const { sign, passport } = require('../encrypt.js');
const { compare } = require('../password.js');


// User Log In
userRouter.get('/login', async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.find({
			where: {
				username,
			},
		});
		const passwordValid = await compare(password, user.password);
		if (passwordValid) {
			const token = sign({
				id: user.id,
				username: user.username,
			});
			res.json({ token });
		} else {
			throw Error('Invalid Credentials');
		}
	} catch (e) {
		res.status(401).json({ msg: e.message });
	}
});

// User Sign Up Create User
userRouter.post('/signup', async (req, res) => {
	try {
		const user = await User.create(req.body);
		const { id, username } = user.dataValues;
		const token = sign({
			id,
			username,
		});
		res.json({ token });
	} catch (e) {
		res.json({ msg: e.message });
	}
});

// Update User Info
userRouter.put('/update', passport.authenticate('jwt', { session: false }), async (req, res) => {
	try {
		const { user } = req;
		user.update({
			password: req.body.password,
			birthday: req.body.birthday,
		});
		user.save();
		res.json({ msg: `User ${user.id} updated.` });
	} catch (e) {
		res.status(401).json({ msg: e.message });
	}
});

// Delete User
userRouter.delete('/delete', passport.authenticate('jwt', { session: false }), async (req, res) => {
	try {
		const { user } = req;
		user.destroy();
		res.json({ msg: `User ${user.id} deleted` });
	} catch (e) {
		res.json({ msg: e.message });
	}
});

module.exports = {
	userRouter,
};
