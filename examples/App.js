import React from 'react'
import { connect } from '..'
import Counter from './Counter'
import List from './List'

const App = connect(props => (
  <div
    style={{
      padding: 48
    }}>
    <h1>refunk {props.count}</h1>
    <Counter />
    <List />
  </div>
))

App.defaultProps = {
  items: [],
  newItem: '',
  count: 0
}

export default App
