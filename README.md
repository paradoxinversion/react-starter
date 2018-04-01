# react-starter
react-starter is a simple starting point for Single Page Apps using React, Babel, and Webpack.

## Folder Structure
```
.
+-- public
| +-- favicon.ico
| +-- index.html
| +-- manifest.json
+-- src
| +-- Components
|   +-- Message
|     +-- Message.css
|     +-- Message.js
| +-- App.css
| +-- App.js
| +-- index.js
+-- .babelrc
+-- .eslintrc
+-- .gitignore
+-- CONTRIBUTING
+-- LICENSE
+-- package-lock.json
+-- package.json
+-- README.md
+-- webpack.config.js
```


## Usage
(Note: this project was created in Node v9.3.0)
Clone this repo and install dependencies with `npm install`. 

### Starting The Server
To start the server asnd start hacking, run
```
npm start
```
This starter uses webpack-dev-server to spin up an Express server with Hot-Reloading capability.

## Static Assets
Static Assets are served from the `/public` folder.

## Styling
Stylesheets are bundled along with project files in the .src folder, so you can divide your stylesheets by component (or any other configuration you plan)