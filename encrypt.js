const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const jwt = require('jsonwebtoken');
const { User } = require('./models.js');

const SECRET = "please don't tell";
const sign = payload => jwt.sign(payload, SECRET);

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: SECRET,
};

passport.use(new JwtStrategy(opts, async (payload, done) => {
	try {
		const user = await User.findByPk(payload.id);
		return done(null, user);
	} catch (e) {
		return done(e, false);
	}
}));

module.exports = {
	sign,
	passport,
};
