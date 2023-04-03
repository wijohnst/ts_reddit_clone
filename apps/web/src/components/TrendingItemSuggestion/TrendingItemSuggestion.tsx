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
}

const TrendingItemSuggestion = ({ metaData }: Props) => {
  const {
    URL,
    trendingSuggestionHeading,
    trendingSuggestionSummary,
    targetSubreddit,
  } = metaData;
  const { subRedditIcon, subRedditName } = targetSubreddit;

  return (
    <li>
      <div className="list-item-text-container">
        <div className="list-item-heading">
          <Icon>
            <GoCircleIcon />
          </Icon>
          <h1>{trendingSuggestionHeading}</h1>
        </div>
        <h2> {trendingSuggestionSummary}</h2>
        <div className="list-item-target-subreddit">
          <Icon>{subRedditIcon}</Icon>
          <p>{subRedditName}</p>
        </div>
      </div>
      <div className="list-item-preview-image-container">
        <img src={URL} alt="preview-image" />
      </div>
    </li>
  );
};
export default TrendingItemSuggestion;
