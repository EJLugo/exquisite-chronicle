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

# MVP
-Create a working website for **Exquisite Chronicle**.
-Guest users can view completed stories by genre.
-After logging in, a user can create a prompt by genre or view prompts by genre.
-All forms: login, register and create a prompt fully functional.
-Create all necessary routes using React and Express.      
-Style all components using CSS.

#POST-MVP
-Spell checking functionality.
-Check user age and determine appropriated content.

# Project Board
[Trello](https://trello.com/b/3SaSpuH0/exquisite-corpse-stories)

# App Components
## Navigation-Bar
Links to login/register and their routes to each page
## Footer
Links to Contact information and local time.
## Homepage
Header and Footer displayed here. Also a logo and welcome message.
## Login-form
Form for a user to login into his/her account
## Register-form
Form for a new user to Register
## Prompt-forms
A form to allow a user to add a new chapter to that prompt


Wireframes , ERD and API endpoints:
![Wireframe](https://github.com/EJLugo/exquisite-chronicle/blob/master/images/wireframe1.JPG)
![Wireframe2](https://github.com/EJLugo/exquisite-chronicle/blob/master/images/wireframe2.JPG)
![Wireframe3](https://github.com/EJLugo/exquisite-chronicle/blob/master/images/wireframe3.JPG)
![Wireframe4](https://github.com/EJLugo/exquisite-chronicle/blob/master/images/wireframe4.JPG)
![ERD](https://github.com/EJLugo/exquisite-chronicle/blob/master/images/erdplus-diagram.png)
![API](https://github.com/EJLugo/exquisite-chronicle/blob/master/images/API-endpoints.png)
![Component Hierarchy](https://github.com/EJLugo/exquisite-chronicle/blob/master/images/component-hierarchy.JPG)

# Issues and Resolutions
-ESLint errors

# References

[Class examples for reference: ](https://git.generalassemb.ly/wdi-nyc-octonion)
[React website for reference: ](https://reactjs.org/docs/getting-started.html)
