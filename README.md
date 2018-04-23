# React ExpressJS Boilerplate

> Based on [MobX Boilerplate](https://github.com/Mosho1/react-mobx-boilerplate).

React and ExpressJS together to offer a JSON API through ExpressJS &amp; a nice frontend through React

## Stack
- React
- ExpressJS
- Webpack 3
- CSS Modules

## Features
- HMR of components
- Code-splitting out of the box
- Routing with React-Router for frontend, and ExpressJS for API

## Installation and starting
```
- npm install
- npm start
- Open browser at [http://localhost:3000](http://localhost:3000)
```

### Building for production
```
Not ready yet...
```

### Structure
```
react-expressjs-boilerplate
└───src/
    │
    ├─── api/
    ├────── express-router.js /* All ExpressJS routes for API Call */
    ├─── frontend/
    ├────── components/
    ├───────── App
    ├──────────── App.js /* General rendered HTML structure */
    ├───────── Layout
    ├──────────── Header.js /* Header declared in App.js */
    ├──────────── Footer.js /* Footer declared in App.js */
    ├───────── Router
    └──────────── Router.js /* All React Routes & States */
```

## TODO

- [ ] Make React router work
- [ ] Pass --inspect to node process
- [ ] Add support for map files (Chrome dev tools debugging)
- [ ] Upgrade to webpack 4
- [ ] Add linter
- [ ] Add SASS
- [ ] Create Server build script