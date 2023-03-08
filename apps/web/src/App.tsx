import * as React from 'react';
import './App.scss';
import Icon, { iconColor } from './components/Icon/Icon';
import { ReactComponent as RedditIcon } from '../src/assets/redditIcon.svg';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <h1>Reddit Clone</h1>
    </div>
  );
};

export default App;
