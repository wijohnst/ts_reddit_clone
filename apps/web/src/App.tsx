import * as React from 'react'
import './App.scss'
import { add } from 'axios-wrapper'

const App = (): React.ReactElement => {
  console.log(add)
  return (
    <div className="App">
      <h1>Reddit Clone</h1>
    </div>
  )
}

export default App
