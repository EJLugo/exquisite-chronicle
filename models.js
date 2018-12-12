const Sequelize = require('sequelize');
const { createHash } = require('./password.js');

// Circular imports

const sequelize = new Sequelize({
	database: 'exquisite_chronicle_db',
	dialect: 'postgres',
	operatorsAliases: false,
	define: {
		underscored: true,
	},
});

const User = sequelize.define('user', {
	username: Sequelize.STRING,
	password: Sequelize.STRING,
	birthday: Sequelize.DATEONLY,
});

// Curt: hash user given password to store in database
User.beforeCreate(async (user, options) => {
	const passwordDigest = await createHash(user.password);
	user.password = passwordDigest;
});
// Curt: when a user updates her info, check if password was changed, if so hash and store it.
User.beforeUpdate(async (user, options) => {
	if (options.fields.includes('password')) {
		const passwordDigest = await createHash(user.password);
		user.password = passwordDigest;
	}
});

const Chapter = sequelize.define('chapter', {
	body: Sequelize.TEXT,
	user_id: Sequelize.INTEGER,
});

const Prompt = sequelize.define('prompt', {
	genre: Sequelize.STRING,
	body: Sequelize.TEXT,
	max_chapters: Sequelize.INTEGER,
	chapter_length: Sequelize.INTEGER,
});

const CompletedStory = sequelize.define('completed_story', {
	title: Sequelize.STRING,
	genre: Sequelize.STRING,
	body: Sequelize.TEXT,
	// Array of user_id ?
});

User.hasMany(Prompt);
Prompt.belongsTo(User);

Prompt.hasMany(Chapter);
Chapter.belongsTo(Prompt);

console.log('models');
module.exports = {
	sequelize,
	User,
	Chapter,
	Prompt,
	CompletedStory,
};
