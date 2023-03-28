import * as React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';

const App = (): React.ReactElement => {
  const test = () => {
    console.log('potato');
  };
  return (
    <div className="App">
      <h1>Reddit Clone</h1>
      <SearchBar handleSearch={test} />
    </div>
  );
};

export default App;
