import * as React from 'react';
import './TrendingItemSuggestion.scss';
import { ReactComponent as GoCircleIcon } from '../../assets/goCircleIcon.svg';
import Icon from '../Icon/Icon';

interface Props {
  metaData: {
    URL: string;
    trendingSuggestionHeading: string;
    trendingSuggestionSummary: string;
    targetSubreddit: {
      subRedditIcon: React.ReactElement;
      subRedditName: string;
    };
  };
  handleClick: () => void;
  customTestId?: string;
}

const TrendingItemSuggestion = ({
  metaData,
  handleClick,
  customTestId = 'list-item',
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
      className={!metaData ? 'loading' : ''}
      data-testid={customTestId}
    >
      {metaData && (
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
            <h2 data-testid="list-item-summary">
              {' '}
              {trendingSuggestionSummary}
            </h2>
            <div className="list-item-target-subreddit">
              <Icon customTestId="list-item-subreddit-icon">
                {subRedditIcon}
              </Icon>
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
