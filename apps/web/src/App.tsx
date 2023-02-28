import * as React from 'react';
import './App.scss';
import Icon from './components/Icon/Icon';
import redditIcon from '../src/assets/redditIcon.svg';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <h1>Reddit Clone</h1>
      <Icon icon={redditIcon} />
    </div>
  );
};

export default App;
