import * as React from 'react';
import FeedItem, { Props as FeedItemProps } from '../FeedItem/FeedItem';
import './FeedGroup.scss';

export interface FeedGroupProps {
  heading: string;
  feedItems: FeedItemProps[];
}

/**
 *
 * @param {FeedGroupProps} props - The props object.
 * @param {string} props.heading - The heading text for the group of FeedItems
 * @param {FeedItemProps[]} props.feedItems - An array of FeedItem props to map through
 * @returns {JSX.Element} A JSX element
 */

const FeedGroup = ({ heading, feedItems }: FeedGroupProps) => {
  return (
    <div className="feedbar-group">
      <h3 className="feedbar-heading">{heading}</h3>
      {feedItems.map((feedItem) => (
        <FeedItem
          svg={feedItem.svg}
          label={feedItem.label}
          href={feedItem.href}
          key={feedItem.label}
        />
      ))}
    </div>
  );
};

export default FeedGroup;
