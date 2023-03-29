import React from 'react';
import Icon, { iconColor } from '../Icon/Icon';
import './FeedItem.scss';

export interface Props {
  svg: React.ReactElement;
  label: string;
  href: string;
}

/**
 * Renders a FeedItem component
 *
 * @param {Object} props - The props object.
 * @param {React.ReactElement} props.svg - The SVG icon to display
 * @param {string} props.label - The text to show in the label element.
 * @param {string} props.href - the URL to use in the anchor element.
 * @returns {JSX.Element} A JSX element
 */
const FeedItem = ({ svg, label, href }: Props) => {
  return (
    <a href={href}>
      <div className="feedsbar-feeditem-container">
        <Icon colorProp={iconColor.Default} customTestId={label}>
          {svg}
        </Icon>
        <label className="feedsbar-feeditem-label">{label}</label>
      </div>
    </a>
  );
};

export default FeedItem;
