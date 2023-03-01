import * as React from 'react';
import './App.scss';
import Nav from './components/Nav/Nav';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Nav />
      <h1>Reddit Clone</h1>
    </div>
  );
};

export default App;
