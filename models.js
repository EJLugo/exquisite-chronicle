const Sequelize = require('sequelize');

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
// TODO: Curt, add hook for password auth 

const Chapter = sequelize.define('chapter', {
	body: Sequelize.TEXT,
	user_id: Sequelize.INTEGER,
});

const Prompt = sequelize.define('prompt', {
	genre: Sequelize.STRING,
	body: Sequelize.STRING,
	max_chapters: Sequelize.INTEGER,
	chapter_length: Sequelize.INTEGER,
});

const CompletedStory = sequelize.define('completed_story', {
	title: Sequelize.STRING,
	genre: Sequelize.STRING,
	body: Sequelize.TEXT,
	//Array of user_id ?
});

User.hasMany(Prompt);
Prompt.belongsTo(User);

Prompt.hasMany(Chapter);
Chapter.belongsTo(Prompt);


module.exports = {
	sequelize,
	User,
	Chapter,
	Prompt,
	CompletedStory,
};
