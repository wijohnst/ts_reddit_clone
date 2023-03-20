import * as React from 'react';
import Icon, { iconColor } from '../Icon/Icon';
import { ReactComponent as RedditWordmark } from '../../assets/redditWordmark.svg';

/**
 * Renders a logo component within a navbar.
 *
 * @returns {React.ReactElement} A JSX element representing the Reddit Wordmark component.
 */

const Wordmark = (): React.ReactElement => {
  return (
    <header>
      <Icon colorProp={iconColor.Default}>
        <RedditWordmark />
      </Icon>
    </header>
  );
};

export default Wordmark;
