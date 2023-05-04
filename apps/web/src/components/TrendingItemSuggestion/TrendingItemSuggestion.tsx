import * as React from 'react';
import './TrendingItemSuggestion.scss';
import { ReactComponent as GoCircleIcon } from '../../assets/goCircleIcon.svg';
import Icon from '../Icon/Icon';

interface Props {
  /** Data from parent component to populate component */
  metaData: {
    URL: string;
    trendingSuggestionHeading: string;
    trendingSuggestionSummary: string;
    targetSubreddit: {
      subRedditIcon: string;
      subRedditName: string;
    };
  };
  /** What happens when we click the component? */
  handleClick: () => void;
  /** An optional custom test ID for the component.  */
  customTestId?: string;
  /** Has the metaData been fetched? */
  isLoading: boolean;
}

const TrendingItemSuggestion = ({
  metaData,
  handleClick,
  customTestId = 'list-item',
  isLoading,
}: Props) => {
  const {
    URL,
    trendingSuggestionHeading,
    trendingSuggestionSummary,
    targetSubreddit,
  } = metaData;
  const { subRedditIcon, subRedditName } = targetSubreddit;

  return (
    <li
      onClick={handleClick}
      data-testid={customTestId}
      className={isLoading ? 'loading' : ''}
    >
      {!isLoading && (
        <>
          <div className="list-item-text-container">
            <div className="list-item-heading">
              <Icon customTestId="list-item-heading-icon">
                <GoCircleIcon />
              </Icon>
              <h1 data-testid="list-item-heading">
                {trendingSuggestionHeading}
              </h1>
            </div>
            <h2 data-testid="list-item-summary">{trendingSuggestionSummary}</h2>
            <div className="list-item-target-subreddit">
              <p>{subRedditIcon}</p>
              <p data-testid="list-item-subreddit-link">{subRedditName}</p>
            </div>
          </div>
          <div className="list-item-preview-image-container">
            <img
              data-testid="list-item-image"
              className="distinct"
              src={URL}
              alt="preview-image"
            />
          </div>
        </>
      )}
    </li>
  );
};

export default TrendingItemSuggestion;
