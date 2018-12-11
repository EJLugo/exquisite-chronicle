const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = "please don't tell";
const SALT = 10;

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
	sign
};
