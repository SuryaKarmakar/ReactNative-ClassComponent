# React Native Class Component

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
