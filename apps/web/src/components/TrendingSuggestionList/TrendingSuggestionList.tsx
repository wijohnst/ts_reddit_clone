import * as React from 'react';
import { useQuery } from 'react-query';
import TrendingItemSuggestion from '../TrendingItemSuggestion/TrendingItemSuggestion';
import './TrendingSuggestionList.scss';

type Item = {
  id: number;
  URL: string;
  trendingSuggestionHeading: string;
  trendingSuggestionSummary: string;
  targetSubreddit: {
    subRedditIcon: React.ReactElement;
    subRedditName: string;
  };
};

const TrendingSuggestionList = (): React.ReactElement => {
  const { isLoading, data, isFetching, isFetched } = useQuery(
    'suggested-items',
    async () => {
      const response = await fetch('../../Data/SuggestedItems.json');
      const data = await response.json();
      return data;
    }
  );

  const dummyfunc = () => {};

  return (
    <ul className={isLoading ? 'loading-suggestion-list' : ''}>
      {data &&
        data.map((item: Item) => {
          return (
            <TrendingItemSuggestion
              key={item.id}
              metaData={item}
              handleClick={dummyfunc}
              isLoading={isFetching || !isFetched}
            />
          );
        })}
    </ul>
  );
};
export default TrendingSuggestionList;
