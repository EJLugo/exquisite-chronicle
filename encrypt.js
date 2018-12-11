const bcrypt = require('bcrypt');

const SALT = 10;

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
};
