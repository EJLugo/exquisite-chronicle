# Exquisite Chronicle
* We are developing a writing app where based off of the idea of Exquisite Corpse, a collaborative story chronicle that traces its roots to the Parisian Surrealist Movement.

* Exquisite Corpse is written by several people, each of whom writes a word on a sheet of paper, folds the paper to conceal it, and passes it on to the next person for his or her contribution.

* We’d like to incorporate that group story writing idea into our app. A user writes a prompt for other users to view. Those users can then add chapters to the prompt, creating a collaborative story telling experience.

## User Interactions
* From the index view, users can view completed stories by genre. 	

* After logging in, a user can create a prompt by genre or view prompts by genre; e.g. such as horror, mystery, adventure, love story etc.

* Users can select a prompt, rendering a view to the last chapter submitted under that prompt.

* A form would allow a user to add a new chapter to that prompt. API calls would append the chapter to the prompt in the database.

* Each prompt has a max number of chapters, and each chapter a max number of characters.

## Technologies Used
* React for user interface

* Express with NodeJS to make AJAX calls with custom routes defined.

* Sequelize ORM on a PostgreSQL database.

* Third party APIs: https://market.mashape.com/montanaflynn/spellcheck for spell checking functionality.

Wireframes , ERD and API endpoints:
![Wireframe](https://github.com/EJLugo/exquisite-chronicle/blob/master/images/wireframe1.JPG)
![Wireframe2](https://github.com/EJLugo/exquisite-chronicle/blob/master/images/wireframe2.JPG)
![Wireframe3](https://github.com/EJLugo/exquisite-chronicle/blob/master/images/wireframe3.JPG)
![Wireframe4](https://github.com/EJLugo/exquisite-chronicle/blob/master/images/wireframe4.JPG)
![ERD](https://github.com/EJLugo/exquisite-chronicle/blob/master/images/erdplus-diagram.png)
![API](https://github.com/EJLugo/exquisite-chronicle/blob/master/images/API-endpoints.png)
![Component Hierarchy](https://github.com/EJLugo/exquisite-chronicle/blob/master/images/component-hierarchy.JPG)

///
## MVP

* Create an app that allows users to generate a story prompt that other users can than build off of until it makes a full story.
* Each story length and genre will be determined by the user.
* Users can only contribute if they have registered with the app and have logged in.
* Registered users can search for prompts and read any chapters and completed stories.
* Guest users can preview the site, but will not have permission to add to prompts.
* Use a Spellcheck API to check for user spelling errors.

## Post-MVP
* Age validation for stories that may not be suitable for all readers
* Allow a character limit for each chapter

## Planning Materials
* We used Trello in order to stay organized, and continued to break out tasks as we ran into problems or found that tasks would be best handled by more than one teammate.
