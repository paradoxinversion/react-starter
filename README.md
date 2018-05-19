# react-starter

react-starter is a simple starting point for Single Page Apps using React, Babel, and Webpack.

## Getting Started

_(Note: this project was created in Node v9.3.0)_

Clone this repo and install dependencies with `npm install`.

### Starting The Dev Server

To start the server and start hacking, run

```BASH
npm start
```

This starter uses webpack-dev-server to spin up an Express server with Hot-Reloading capability. Changes to code in `.src` should cause pages to reload.

## Static Assets

Static Assets are served from the `/public` folder.

## Styling

Stylesheets are bundled along with project files in the `.src` folder, so you can divide your stylesheets by component (or any other configuration you plan)

## Bundling

To bundle your files, run

```BASH
npm run build
```

This will bundle your files at `<projectRoot>/dist/bundle.js`. `index.html` already references this location, allowing you build and open `index.html` without having to start the server. Note that there are no optimizations in place at this time.

## Feature Support

This implementation strives to make as few assumptions about what you intend to do with it as possible, though it does assume you intend to use modern language fetures. If there is a feature you believe is missing that is absolutely necessary for a bare-bones implementation, feel free to file an issue.

Note: In the future, it will make the assumption that you want to copy all necessary files for your app (including `public`, etc) into the `dist` folder.

## General Support

If you're encountering a bug or unexpected behavior, also feel free to file an issue. Be sure to include your version of node, your package.json, any error output, and if possible, a link to a repository that has the issue you're referring to. Note, that tickets about bugs that go beyond this implementation (for instance, you decide to add a loader not included in this repo) will be closed unless it's determined a problem with this implenetation is causing the issue.

#### Additional Credits

The swiss army knife svg is by [Delapouite](http://game-icons.net/delapouite/originals/swiss-army-knife.html) under CC BY 3.0
