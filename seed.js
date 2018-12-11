const Sequelize = require('sequelize');
const moment = require('moment');

const { User, Prompt, Chapter, CompletedStory } = require('./models');
const Op = Sequelize.Op;


async function createUser() {
	await User.destroy({ where: { } })
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
		},
		{
			username: 'HappyPen',
			password: 'St4ndByM3',
			birthday: moment('25 December 2002')
		}
	]);
};

async function createPrompt() {
	const users = await User.findAll();
	await Prompt.destroy({ where: { } });
	await Prompt.bulkCreate([
		{
			user_id: users[0].id,
			genre: 'Horror',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			max_chapters: 13,
			chapter_length: 3300
		},
		{
			user_id: users[2].id,
			genre: 'Non-fiction',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			max_chapters: 4,
			chapter_length: 5000
		},
		{
			user_id: users[1].id,
			genre: 'Fiction',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			max_chapters: 8,
			chapter_length: 6000
		},
		{
			user_id: users[3].id,
			genre: 'YA',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			max_chapters: 8,
			chapter_length: 6000
		},
		{
			user_id: users[0].id,
			genre: 'Crime',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			max_chapters: 10,
			chapter_length: 8000
		}
	]);
};

async function createChapter() {
	const prompts = await Prompt.findAll();
	const users = await User.findAll();
	await Chapter.destroy({ where:{ } });
	await Chapter.bulkCreate([
		{
			prompt_id: prompts[0].id,
			user_id: users[1].id,
			body: 'Jelly sweet chupa chups bear claw sweet pastry fruitcake. Marshmallow dessert sweet roll chocolate bar chupa chups. Chocolate dessert cotton candy gummies. Marshmallow gummi bears powder gingerbread cotton candy sweet pie liquorice. Croissant jelly cupcake bear claw oat cake candy canes. Jujubes brownie candy canes. Jelly-o powder chocolate bar croissant powder halvah. Brownie donut dragée cake cotton candy cake. Soufflé macaroon tootsie roll croissant. Pastry cupcake jujubes sweet candy canes gingerbread. Biscuit tiramisu macaroon soufflé dragée jelly-o carrot cake bonbon. Cake tart lollipop halvah dessert danish tiramisu brownie tiramisu. Lemon drops chocolate chupa chups powder chupa chups pie jujubes. Chocolate cake ice cream lollipop candy croissant sugar plum powder candy pudding. Biscuit muffin caramels cupcake muffin cheesecake lollipop bear claw jelly beans. Jelly-o gummies ice cream oat cake icing brownie biscuit jelly. Sweet roll soufflé marzipan powder cupcake pudding marzipan sweet marzipan. Gummies tiramisu gummies cookie marzipan chocolate cake pudding. Dragée toffee candy biscuit chocolate cake gingerbread.'
		},
		{
			prompt_id: prompts[1].id,
			user_id: users[2].id,
			body: 'Jelly sweet chupa chups bear claw sweet pastry fruitcake. Marshmallow dessert sweet roll chocolate bar chupa chups. Chocolate dessert cotton candy gummies. Marshmallow gummi bears powder gingerbread cotton candy sweet pie liquorice. Croissant jelly cupcake bear claw oat cake candy canes. Jujubes brownie candy canes. Jelly-o powder chocolate bar croissant powder halvah. Brownie donut dragée cake cotton candy cake. Soufflé macaroon tootsie roll croissant. Pastry cupcake jujubes sweet candy canes gingerbread. Biscuit tiramisu macaroon soufflé dragée jelly-o carrot cake bonbon. Cake tart lollipop halvah dessert danish tiramisu brownie tiramisu. Lemon drops chocolate chupa chups powder chupa chups pie jujubes. Chocolate cake ice cream lollipop candy croissant sugar plum powder candy pudding. Biscuit muffin caramels cupcake muffin cheesecake lollipop bear claw jelly beans. Jelly-o gummies ice cream oat cake icing brownie biscuit jelly. Sweet roll soufflé marzipan powder cupcake pudding marzipan sweet marzipan. Gummies tiramisu gummies cookie marzipan chocolate cake pudding. Dragée toffee candy biscuit chocolate cake gingerbread.'
		},
		{
			prompt_id: prompts[2].id,
			user_id: users[0].id,
			body: 'Jelly sweet chupa chups bear claw sweet pastry fruitcake. Marshmallow dessert sweet roll chocolate bar chupa chups. Chocolate dessert cotton candy gummies. Marshmallow gummi bears powder gingerbread cotton candy sweet pie liquorice. Croissant jelly cupcake bear claw oat cake candy canes. Jujubes brownie candy canes. Jelly-o powder chocolate bar croissant powder halvah. Brownie donut dragée cake cotton candy cake. Soufflé macaroon tootsie roll croissant. Pastry cupcake jujubes sweet candy canes gingerbread. Biscuit tiramisu macaroon soufflé dragée jelly-o carrot cake bonbon. Cake tart lollipop halvah dessert danish tiramisu brownie tiramisu. Lemon drops chocolate chupa chups powder chupa chups pie jujubes. Chocolate cake ice cream lollipop candy croissant sugar plum powder candy pudding. Biscuit muffin caramels cupcake muffin cheesecake lollipop bear claw jelly beans. Jelly-o gummies ice cream oat cake icing brownie biscuit jelly. Sweet roll soufflé marzipan powder cupcake pudding marzipan sweet marzipan. Gummies tiramisu gummies cookie marzipan chocolate cake pudding. Dragée toffee candy biscuit chocolate cake gingerbread.'
		},
		{
			prompt_id: prompts[3].id,
			user_id: users[3].id,
			body: 'Jelly sweet chupa chups bear claw sweet pastry fruitcake. Marshmallow dessert sweet roll chocolate bar chupa chups. Chocolate dessert cotton candy gummies. Marshmallow gummi bears powder gingerbread cotton candy sweet pie liquorice. Croissant jelly cupcake bear claw oat cake candy canes. Jujubes brownie candy canes. Jelly-o powder chocolate bar croissant powder halvah. Brownie donut dragée cake cotton candy cake. Soufflé macaroon tootsie roll croissant. Pastry cupcake jujubes sweet candy canes gingerbread. Biscuit tiramisu macaroon soufflé dragée jelly-o carrot cake bonbon. Cake tart lollipop halvah dessert danish tiramisu brownie tiramisu. Lemon drops chocolate chupa chups powder chupa chups pie jujubes. Chocolate cake ice cream lollipop candy croissant sugar plum powder candy pudding. Biscuit muffin caramels cupcake muffin cheesecake lollipop bear claw jelly beans. Jelly-o gummies ice cream oat cake icing brownie biscuit jelly. Sweet roll soufflé marzipan powder cupcake pudding marzipan sweet marzipan. Gummies tiramisu gummies cookie marzipan chocolate cake pudding. Dragée toffee candy biscuit chocolate cake gingerbread.'
		}
	]);
}


async function seed() {
	try {
		await createUser();
		await createPrompt();
		await createChapter();
	} catch (e) {
		console.error(e);
	}
	process.exit();
}

seed();
