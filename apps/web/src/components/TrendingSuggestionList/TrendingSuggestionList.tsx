import * as React from 'react';
import { useQuery } from 'react-query';
import TrendingItemSuggestion from '../TrendingItemSuggestion/TrendingItemSuggestion';
import './TrendingSuggestionList.scss';

interface Item {
  /** How we identify each item */
  id: number;
  /** How can we view the suggested post? */
  URL: string;
  /** Suggestion Title */
  trendingSuggestionHeading: string;
  /** Suggestion Summary */
  trendingSuggestionSummary: string;
  /** Specific forum the suggestion lives in */
  targetSubreddit: {
    /** Forum's Icon */
    subRedditIcon: React.ReactElement;
    /** Forum's title */
    subRedditName: string;
  };
}

interface Props {
  customTestId?: string;
}

const TrendingSuggestionList = ({
  customTestId = 'suggestion-list',
}: Props): React.ReactElement => {
  const { isLoading, data, isFetching, isFetched } = useQuery(
    'suggested-items',
    async () => {
      const response = await fetch('../../Data/SuggestedItems.json');
      const data = await response.json();
      return data;
    }
  );

  const handleClick = () => {};

  return (
    <ul
      className={isLoading ? 'loading-suggestion-list' : ''}
      data-testid={customTestId}
    >
      {data &&
        data.map((item: Item) => {
          return (
            <TrendingItemSuggestion
              customTestId="list-item"
              key={item.id}
              metaData={item}
              handleClick={handleClick}
              isLoading={isFetching || !isFetched}
            />
          );
        })}
    </ul>
  );
};
export default TrendingSuggestionList;
