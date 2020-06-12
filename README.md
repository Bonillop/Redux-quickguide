# Redux quickguide
Redux is a library for managing state, it can be used with any framework or library such as Angular, React, Vue, or even plain javascript.

It uses functional programming so we have to use techniques that don't mutate the data structures we work with such as spread operators or libraries that achieve the same goal such as `immutable` or `immer`

## Install
run `npm install`, to run the app run `npm run start` and visit http://localhost:9000, you can change the port in `webpack.config.js`

## Core concepts
The core concepts of Redux are the following:

- Store: This is the centralized object in which we store the state or the part of state of our app that we want to manage with redux. We have only one in our app.
  - the core methods of store are `store.getState()`, `store.dispatch()`, `store.subscribe()`
- Reducer: reducers are functions that allow us to interact with the store given the state and an action. We can have many reducers to interact with different parts of our state.
- Action: actions are plain javascript objects that describe what happened. These are used inside the reducers to trigger their respective event and modify the store accordingly. They must have a type property which indicates the action to be taken in the reducer

## Order of view

reducer.js -> store.js -> index.js