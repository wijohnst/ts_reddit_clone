import * as React from 'react';
import './App.scss';
import Icon from './components/Icon/Icon';
import { ReactComponent as redditIcon } from '../src/assets/redditIcon.svg';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <h1>Reddit Clone</h1>
      <Icon svg={redditIcon} />
    </div>
  );
};

export default App;
