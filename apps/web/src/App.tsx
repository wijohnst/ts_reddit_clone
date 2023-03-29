import * as React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';

const App = (): React.ReactElement => {
  const tet = () => {
    console.log('sfd');
  };
  return (
    <div className="App">
      <h1>Reddit Clone</h1>
      <SearchBar handleSearch={tet} />
    </div>
  );
};

export default App;
