const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { User } = require('./models.js');

const SECRET = "please don't tell";
const SALT = 10;

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: SECRET,
};

passport.use(new JwtStrategy(opts, async (payload, done) => {
	try {
		console.log('payload id ', payload);
		const user = await User.findByPk(payload.id);
		return done(null, user);
	} catch (e) {
		return done(e, false);
	}
}));

function sign(payload) {
	return jwt.sign(payload, SECRET);
}

async function createHash(password) {
	const passwordDigest = await bcrypt.hash(password, SALT);
	return passwordDigest;
}

async function compare(password, hashedPassword) {
	const isValid = bcrypt.compare(password, hashedPassword);
	return isValid;
}

module.exports = {
	createHash,
	compare,
	sign,
	passport,
};
