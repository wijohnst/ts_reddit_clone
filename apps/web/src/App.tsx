import * as React from 'react';
import './App.scss';
import TrendingSuggestions from './components/TrendingSuggestions/TrendingSuggestions';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <h1>Reddit Clone</h1>
      <TrendingSuggestions />
    </div>
  );
};

export default App;
