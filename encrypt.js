const bcrypt = require('bcrypt');

const { SALT } = process.env;

async function createHash(password) {
	const passwordDigest = await bcrypt.hashSync(password, SALT);
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
