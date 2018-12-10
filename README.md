# Exquisite Chronicle

	1. We are developing a writing app where based off of the idea of Exquisite Corpse, a collaborative story chronicle that traces its roots to the Parisian Surrealist Movement.

	2. Exquisite Corpse is written by several people, each of whom writes a word on a sheet of paper, folds the paper to conceal it, and passes it on to the next person for his or her contribution.

	3. We’d like to incorporate that group story writing idea into our app. A user writes a prompt for other users to view. Those users can then add chapters to the prompt, creating a collaborative story telling experience.

## User Interactions
	1. From the index view, users can view completed stories by genre. 	

	2. After logging in, a user can create a prompt by genre or view prompts by genre; e.g. such as horror, mystery, adventure, love story etc.

	3. Users can select a prompt, rendering a view to the last chapter submitted under that prompt.

	4. A form would allow a user to add a new chapter to that prompt. API calls would append the chapter to the prompt in the database.

	5. Each prompt has a max number of chapters, and each chapter a max number of characters.

## Technologies Used
	1. React for user interface

	2. Express with NodeJS to make AJAX calls with custom routes defined.

	3. Sequelize ORM on a PostgreSQL database.

	4. Third party APIs: https://market.mashape.com/montanaflynn/spellcheck for spell checking functionality.

Wireframes , ERD and API endpoints:
![Wireframe](https://drive.google.com/file/d/1x7S_AAM9QPYIgnax9KgEYZAEcOK0wTrB/view)
![ERD](https://drive.google.com/file/d/1tO9ilAbeMXvcvWoCFrjFImPOol7c9UfI/view)
![API](https://drive.google.com/file/d/1Ap60ZhWdqB25_JqaKwmZrBg4AjnHpgsd/view)
![API](API endpoints.png)
