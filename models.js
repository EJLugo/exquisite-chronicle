const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'exquisite_chronicle_db',
  dialect: 'postgres',
  OperatorsAliases: false,
  define: {
    underscored: true
  },
});

const User = sequelize.define('user', {
	username: Sequelize.STRING,
	password: Sequelize.STRING,
	birthday: Sequelize.INTEGER
});

const Chapter = sequelize.define('chapter', {
	body: Sequelize.TEXT,
	user_id: Sequelize.INTEGER
});

const Prompt = sequelize.define('prompt', {
	genre: Sequelize.STRING,
	body: Sequelize.STRING
});

const Completed_Story = sequelize.define('completed_story', {
	title: Sequelize.STRING,
	genre: Sequelize.STRING,
	body: Sequelize.TEXT
});

User.hasMany(Prompt);
Prompt.belongsTo(User);

Prompt.hasMany(Chapter);
Chapter.belongsTo(Prompt);

<<<<<<< HEAD
=======
User.hasMany(Chapter);
Chapter.belongsTo(User);

User.belongsToMany(Completed_Story, through: {'users_completed_stories'});
Completed_Story.belongsToMany(User, through: {'users_completed_stories'});
>>>>>>> 985379478641c41112041a70f95b1954aaa4a837

module.exports = {
	sequelize,
	User,
	Chapter,
	Prompt,
	Completed_Story
};
