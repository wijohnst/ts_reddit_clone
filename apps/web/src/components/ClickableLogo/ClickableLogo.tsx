import * as React from 'react';
import './ClickableLogo.scss';
import Icon, { iconColor } from '../Icon/Icon';
import Wordmark from '../Wordmark/Wordmark';
import { ReactComponent as RedditIcon } from '../../assets/redditIcon.svg';

interface Props {
  onClick: () => void;
}

/**
 * Renders a logo and wordmark component together within a navbar.
 *
 * @returns {React.ReactElement} A JSX element as a clickable reddit logo component.
 */

const ClickableLogo = ({ onClick }: Props): React.ReactElement => {
  return (
    <div className="logo-container" onClick={onClick}>
      <div className="icon-container">
        <Icon colorProp={iconColor.Orange}>
          <RedditIcon />
        </Icon>
      </div>
      <div className="wordmark-container">
        <Wordmark />
      </div>
    </div>
  );
};
export default ClickableLogo;
