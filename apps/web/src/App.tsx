import * as React from 'react';
import './App.scss';

const App = (): React.ReactElement => {
  const test = () => {
    console.log('potato');
  };
  return (
    <div className="App">
      <h1>Reddit Clone</h1>
    </div>
  );
};

export default App;
