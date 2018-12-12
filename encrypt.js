const bcrypt = require('bcrypt');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const jwt = require('jsonwebtoken');
const {User} = require('./models.js');

const SECRET = "please don't tell";
const SALT = 10;
const sign = payload => jwt.sign(payload, SECRET);

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: SECRET,
};

passport.use(new JwtStrategy(opts, async (payload, done) => {
	try {
		console.log('encrypt, ', payload.id);
		debugger;
		const user = await User.findByPk(payload.id);
		return done(null, user);
	} catch (e) {
		return done(e, false);
	}
}));


// Password hashing functions
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
