# React Native Class Component

Class components have previously been the most commonly used. This is because class components are able to do everything a functional component do but more. It can utilize the main functions of React, state, props, and lifecycle methods. Unlike functional components, class components are consist of … well, a class. Class component syntax differs from functional component syntax. Class components use extends React.Component after declaring the class and requires a render() method to return JSX code. In this class component, you can declare a state, set it to a JavaScript object, and use props to be the initial state or change the state in lifecycle methods. Some lifecycle methods are componentDidMount(), componentDidUpdate(), and componentWillUnmount(). These are actions that a functional component cannot perform unless they use React Hooks.

## Usage :

- You need to additionally import Component from React :

```js
import React, { Component } from "react";
```

- Or you can do React.Component :

```js
class App extends React.Component {}
```

- Your component starts as a class extending Component instead of as a function :

```js
export default class App extends Component {}
```

- Class components have a render() function. Whatever is returned inside it is rendered as a React element :

```js
class App extends Component {
  render() {
    return <Text>Hello, World !!!</Text>;
  }
}
```
