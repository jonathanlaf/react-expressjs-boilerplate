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

## Installation and starting
```
- npm install
- npm start
- Open browser at [http://localhost:3000](http://localhost:3000)
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
- [ ] Add linter without ejecting from create-react-app
- [ ] Add SASS without ejecting from create-react-app