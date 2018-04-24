# React ExpressJS Boilerplate

> Based on [Dave Ceddia tutorial](https://daveceddia.com/) - [Deploy React and Express to Heroku](https://daveceddia.com/deploy-react-express-app-heroku/) &  [Create React App with an Express Backend](https://daveceddia.com/create-react-app-express-backend/).

React and ExpressJS together to offer a JSON API through ExpressJS &amp; a nice frontend through React

## Stack
- React
- ExpressJS

## Features
- HMR of components (React)
- Restart Express on file changes (Limited to Express files)
- Code-splitting out of the box
- Routing with React-Router for client
- ExpressJS Route for API

## Installation
```
- npm i && cd ./client && npm i 
```

## Start project
> Make sure you are in the root folder, not in the client folder.
```
- npm start
- Open browser at [http://localhost:3000](http://localhost:3000)
```

## Linting
> Make sure you are in the root folder, not in the client folder.
```
- npm run test:lint /* Run both of the following */
- npm run test:lint:js
- npm run test:lint:css

- npm run test:lint:fix /* Run both of the following */
- npm run test:lint:js:fix
- npm run test:lint:css:fix
```

### Building for production
```
- cd ./client && npm run build 
```

### Structure
```
react-expressjs-boilerplate
├─── bin/
├────── www /* ExpressJS start script */
├─── client/
├────── components/
├───────── App
├──────────── App.js /* General rendered HTML structure */
├───────── Layout
├──────────── Header.js /* Header declared in App.js */
├──────────── Footer.js /* Footer declared in App.js */
├───────── Router
├──────────── Router.js /* All React Routes & States */
├─── routes/
├────── users.js /* Demo route */
├─── App.js /* Handle Express JS magic */
├─── LICENSE /* Share the Knowledge */
├─── package.json
├─── package-lock.json
└─── README.md
```

## TODO

- [X] Make React router work
- [X] Pass --inspect to node process
- [X] Add linter without ejecting from create-react-app
- [X] Add SASS without ejecting from create-react-app ([Doc found](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc), no interest for now since ~~i'm not doing any SASS~~ it's not recommended in React doc.)
