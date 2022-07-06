import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/**
 * Our root app
 *
 * A component can have
 * -> State
 * -> Lifecycle
 * -> UI
 *
 * Separation of concerns => Not a problem bc a component is worried about UI&State&Lifecycle
 * Therefore it is valid to write UI in a React.Component
 *
 * Babel will convert the HTML, but it's possible to turn .js into .jsx and make it work
 * */
class App extends React.Component {
  render() {
    return (<div>Bim World!</div>)
  }
}

/**
 * Allows us to render a React component to the DOM
 *
 * ReactDOM is separated from React so that our code can be rendered differently depending on the end platform
 * */
ReactDOM.render(
  <App />,
  document.getElementById('app')
)
