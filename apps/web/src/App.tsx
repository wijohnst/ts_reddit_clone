import * as React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';

const App = (): React.ReactElement => {
  const handleSearch = () => {
    console.log('dfg');
  };
  const filterResults = () => {
    console.log('dfg');
    return [{}];
  };
  return (
    <div className="App">
      <h1>Reddit Clone</h1>
      <SearchBar handleSearch={handleSearch} filterResults={filterResults} />
    </div>
  );
};

export default App;
