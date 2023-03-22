import * as React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';

const App = (): React.ReactElement => {
  const handleSearch = (searchString: string): void => {
    console.log(searchString);
  };

  return (
    <div className="App">
      <h1>Reddit Clone</h1>
      <SearchBar handleSearch={handleSearch} />
    </div>
  );
};

export default App;
