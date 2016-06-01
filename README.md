# nclud Code Challenge

# Requirements

## Sass
You are required to use [Sass](sass-lang.com). How you do so is up to you. We are looking to see which features of Sass you use and how you use them. We are also looking at how you structure your Sass files and how you write your css.

## Gulp
You are also required to use [Gulp](http://gulpjs.com/) to complete this project. What tasks you choose to write and what plugins you choose to use are both entirely up to you. We are looking to see how you approach development.

## Fonts
The provided mockup requires [Tillium](https://www.google.com/fonts#UsePlace:use/Collection:Titillium+Web), a Google web font. There are three different weights - 300, 400, and 700. This is the only font used in the challenge.


# Instructions

In this repo you will find a mock.jpf file and an assets folder with all required assets. We expect you to send us back a link to a github repository with an index.html built out to match it, as closely as possible. Aside from the requirements listed above, everything else is up to you. We want to see how you manage your time, what you focus on, and how close to finished you can get within a week. In this case, 'finished' means that the site you build closely resembles the mock (don't worry too much about small differences), the site is interactive, responsive and has been through at least some cross-browser testing.

We will be looking at the following:

  - Use of semantic markup
  - Structure of markup and css/sass
  - Use and organization of presentational javascript
  - Use of comments
  - A consistent and coherent git strategy. We will be looking at your commits.

Please be prepared to explain your code and your decisions. If you are busy with freelance work, feel like this is too much work to complete in a week, or have any other concerns then please feel free to reach out to us and discuss.

################################## My notes

# install Gulp
sudo npm install gulp-cli -g
- cli allows you to use gulp tool anywhere and -g means to install it globally

# Step 2
npm init  
- to start a new project and install package.json)

#step 3
npm install gulp --save-dev

#step 4
create a app and dist (distribution) folder
- all files that will be minified go in app folder, after they're minified they will go in the dist folder

#step 5
- create css and scss folder inside app

#step 6
in root directory create a gulpfile.js
- look at code written in gulpfile.js

- gulp command will always look for a gulpfile.js

#step 7
In SCSS folder create a new file called styles.scss

#step 8
npm install gulp-sass --save-dev
- install a plugin (basically a tool)
- now you will have gulp-sass in node_modules folder

#step 9
require gulp-sass in your gulpfile

#step 10
Create a gulp.task for sass then go into terminal and type in 'gulp sass' to convert the code.
