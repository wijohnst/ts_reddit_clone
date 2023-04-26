import * as React from 'react';
import TrendingItemSuggestion from '../TrendingItemSuggestion/TrendingItemSuggestion';
import './TrendingSuggestionList.scss';

export interface MetaDataItem {
  /** How can we view the suggested post? */
  URL: string;
  /** Suggestion Title */
  trendingSuggestionHeading: string;
  /** Suggestion Summary */
  trendingSuggestionSummary: string;
  /** Specific forum the suggestion lives in */
  targetSubreddit: {
    /** Forum's Icon */
    subRedditIcon: string;
    /** Forum's title */
    subRedditName: string;
  };
}

interface Props {
  /** What data are we mapping? */
  metaDataItems: MetaDataItem[];
  /** Is the data currently being fetch? */
  isLoading: boolean;
  /** What happens when we click the component? */
  handleClick: () => void;
  /** An optional custom test ID for the component.  */
  customTestId?: string;
}

const TrendingSuggestionList = ({
  metaDataItems,
  isLoading,
  handleClick,
  customTestId = 'suggestion-list',
}: Props): React.ReactElement => {
  return (
    <ul
      className={isLoading ? 'loading-suggestion-list' : ''}
      data-testid={customTestId}
    >
      {metaDataItems &&
        metaDataItems.map((item: MetaDataItem, index) => {
          return (
            <TrendingItemSuggestion
              customTestId="list-item"
              key={index}
              metaData={item}
              handleClick={handleClick}
              isLoading={isLoading}
            />
          );
        })}
    </ul>
  );
};
export default TrendingSuggestionList;
