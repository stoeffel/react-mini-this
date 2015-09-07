# react-mini-this [![Build Status](https://travis-ci.org/stoeffel/react-mini-this.svg?branch=master)](https://travis-ci.org/stoeffel/react-mini-this)

> Create react components as pure functions with [function bind syntax][fbs]

## Install

```
$ npm install --save react-mini-this
```


## Usage

```js
var React = require('react');
var mini = require('react-mini-this');
var pure = require('react-mini-this/pure');


module.exports = (
	props => <h1>Title: {props.title}</h1> 
)::mini();

module.exports = (
	{ title } => <h1>Title: {title}</h1> 
)::pure();
```

### with props and state

```js

function Counter ( ({ step = 1 } , { setState, state: { count } }) { 
	var incCounter = () => setState({ count : count + step });

  return <span>Counter: {count}<button onClick={incCounter}>+1</button></span> 
}::mini( { count: 10 });

React.render(
  <Counter step={10}/>,
  document.body
)
```

## API

`(render:Function(props, component))::mini([initialState:Object])`

* `render` : This is the actual render function.
  * `props:Object` : The props of the component
  * `component:Object` : The component (`this`)
* `initialState` : The initial state of the component.

## Related

* [react-mini][rm]

## `::` huh?

If you’re wondering what the `::` thing means, you’d better read this excellent [overview](https://github.com/jussi-kalliokoski/trine/blob/5b735cbfb6b28ae94bac0446d9ecd5ce51fb149b/README.md#why) by [@jussi-kalliokoski](https://github.com/jussi-kalliokoski) or have a look at the [function bind syntax proposal][fbs].


## License

MIT © [Christoph Hermann](http://stoeffel.github.io)

[fbs]: https://github.com/zenparsing/es-function-bind
[rm]: https://github.com/stoeffel/react-mini
