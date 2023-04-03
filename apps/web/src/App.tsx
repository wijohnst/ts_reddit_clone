import * as React from 'react';
import './App.scss';
import Icon from './components/Icon/Icon';
import TrendingItemSuggestion from './components/TrendingItemSuggestion/TrendingItemSuggestion';
import { ReactComponent as SearchIcon } from '../src/assets/searchIcon.svg';

const App = (): React.ReactElement => {
  const metaData = {
    URL: 'Url@URL.com',
    trendingSuggestionHeading: 'Search Preview Item Heading',
    trendingSuggestionSummary: 'Search Preview Item Summary',
    targetSubreddit: {
      subRedditIcon: (
        <Icon>
          <SearchIcon />
        </Icon>
      ),
      subRedditName: 'Dogs',
    },
  };

  return (
    <div className="App">
      <h1>Reddit Clone</h1>
      <TrendingItemSuggestion metaData={metaData} />
    </div>
  );
};

export default App;
