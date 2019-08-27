# organic-clock

A clock powered by React + TypeScript + Web Animations API

[1. About](#about)  
[2. What I Did](#what-i-did)  
[3. Available Scripts](#avail)  
[4. Notes](#notes)  
[5. LICENSE](#license)  


<a id="about"></a>
## 1. About

An attempt to use Web Animations API.


<a id="what-i-did"></a>
## 2. What I Did

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```shell
# React + TypeScript basic setups.
cd organic-clock
yarn create react-app . --typescript
yarn add typescript @types/node @types/react @types/react-dom @types/jest
yarn add prop-types

# Adding lint configurations.
yarn global add tslint typescript tslint-react
tslint --init
yarn add tslint tslint-react

# Default CSS is too bothersome...
yarn add normalize.css

# Adding `redux-logger`.
yarn add redux-logger

# Adding Redux.  
# `react-redux` is for bindings.  
# `redux-thunk` is a middleware to let you write
# action creators that return functions
# which basically receives "dispatch" and "getState" methods.
yarn add redux react-redux redux-thunk

# Adding React-Router.
yarn add react-router-dom
```


<a id="avail"></a>
## 3. Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


<a id="notes"></a>
## 4. Notes

```shell
Type 'Element' is missing the following properties from type 'PartyPropsType': place, number  TS2739
```

https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31734#issuecomment-450350193


<a href="license"></a>
## 5. License

Provided under [WTFPL](./LICENSE).  
However, some NPM dependencies have license restrictions.
