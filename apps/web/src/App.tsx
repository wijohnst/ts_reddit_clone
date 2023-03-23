import * as React from 'react';
import './App.scss';
import ClickableLogo from './components/ClickableLogo/ClickableLogo';

const App = (): React.ReactElement => {
  const handleClick = () => {
    console.log('sf');
  };

  return (
    <div className="App">
      <h1>Reddit Clone</h1>
      <ClickableLogo onClick={handleClick} />
    </div>
  );
};

export default App;
