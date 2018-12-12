const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const { userRouter } = require('./routes/userRouter.js');
const { completedStoryRouter } = require('./routes/completedStoryRouter.js');
const { promptRouter } = require('./routes/promptRouter');

const PORT = process.envPORT || 3001;

const app = express();

app.use(logger('dev'));
app.use(bodyParser());
app.use(cors());

app.use('/users', userRouter);
app.use('/stories', completedStoryRouter);
app.use('/prompts', promptRouter);

app.get('/', (req, res) => {
	res.json({
		message: 'Welcome to exquisite-chronicle',
	});
});

app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
