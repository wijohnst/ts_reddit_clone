import * as React from 'react';
import './Wordmark.scss';
import Icon, { iconColor } from '../Icon/Icon';
import { ReactComponent as RedditWordmark } from '../../assets/redditWordmark.svg';

interface Props {
  customTestId?: string;
}

/**
 * Renders a logo component within a navbar.
 *
 * @returns {React.ReactElement} A JSX element representing the Reddit Wordmark component.
 */

const Wordmark = ({
  customTestId = 'wordmarkTestId',
}: Props): React.ReactElement => {
  return (
    <h1 data-testid={customTestId}>
      <Icon colorProp={iconColor.Default}>
        <RedditWordmark />
      </Icon>
    </h1>
  );
};

export default Wordmark;
