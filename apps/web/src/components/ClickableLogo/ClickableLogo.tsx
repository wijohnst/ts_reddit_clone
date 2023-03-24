import * as React from 'react';
import './ClickableLogo.scss';
import Icon, { iconColor } from '../Icon/Icon';
import Wordmark from '../Wordmark/Wordmark';
import { ReactComponent as RedditIcon } from '../../assets/redditIcon.svg';

interface Props {
  onClick: () => void;
  customTestId?: string;
}

/**
 * Renders a logo and wordmark component together within a navbar.
 *
 * @returns {React.ReactElement} A JSX element as a clickable reddit logo component.
 */

const ClickableLogo = ({
  onClick,
  customTestId = 'clickablelogo',
}: Props): React.ReactElement => {
  return (
    <div
      className="logo-container"
      onClick={onClick}
      data-testid={customTestId}
    >
      <div className="icon-container">
        <Icon colorProp={iconColor.Orange} customTestId={'clickableicon-icon'}>
          <RedditIcon />
        </Icon>
      </div>
      <div className="wordmark-container">
        <Wordmark customTestId={'clickableicon-wordmark'} />
      </div>
    </div>
  );
};
export default ClickableLogo;
