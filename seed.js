const Sequelize = require('sequelize');
const moment = require('moment');

const { User, Prompt, Chapter, Completed_Story } = require('./models');
const Op = Sequelize.Op;


async function createUser() {
	await User.destroy({where: {}})
	await User.bulkCreate([
		{
			username: 'EvWrites',
			password: 'Escr1b3',
			birthday: moment('2 August 1985')
		},
		{
			username: 'SoniaWrites',
			password: 'P3nandSw0rd',
			birthday: moment('31 July 1950')
		},
		{
			username: 'JackWrites',
			password: 'Kerouacdrives',
			birthday: moment('23 December 2000')
		}
	]);
};

async function createPrompt() {
	await Prompt.destroy({where: {}});
	await Prompt.bulkCreate([
		{
			genre: 'Horror',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			genre: 'Non-fiction',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			genre: 'Fiction',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			genre: 'YA',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			genre: 'Crime',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}
	]);
};

async function associateUsersAndPrompts() {
	const usersPromise = User.findAll({
		where: {
			username: {
				[Op.or]: ['EvWrites','SoniaWrites', ]
			}
		}
	});
	const promptsPromise = Prompt.findAll({
		where: {
			genre: {
				[Op.or]: ['Horror']
			}
		}
	});
	const [users, prompts] = await Promise.all([usersPromise, promptsPromise]);
	await Promise.all(users.map(user => user.setPrompts(prompts)));
}



async function seed() {
	try {
		await createUser();
		await createPrompt();
	} catch (e) {
		console.error(e);
	}
	process.exit();
}

seed();
