import * as React from 'react';
import './Wordmark.scss';
import Icon, { iconColor } from '../Icon/Icon';
import { ReactComponent as RedditWordmark } from '../../assets/redditWordmark.svg';

/**
 * Renders a logo component within a navbar.
 *
 * @returns {React.ReactElement} A JSX element representing the Reddit Wordmark component.
 */

const Wordmark = (): React.ReactElement => {
  return (
    <h1>
      <Icon colorProp={iconColor.Default}>
        <RedditWordmark />
      </Icon>
    </h1>
  );
};

export default Wordmark;
