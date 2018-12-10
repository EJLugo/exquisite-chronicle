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


module.exports = {
	sequelize,
	User,
	Chapter,
	Prompt,
	Completed_Story
};
