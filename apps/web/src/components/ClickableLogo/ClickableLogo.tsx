import * as React from 'react';
import './ClickableLogo.scss';
import Icon, { iconColor } from '../Icon/Icon';
import Wordmark from '../Wordmark/Wordmark';
import { ReactComponent as RedditIcon } from '../../assets/redditIcon.svg';

/**
 * Renders a logo and wordmark component together within a navbar.
 *
 * @returns {React.ReactElement} A JSX element as a clickable reddit logo component.
 */

const ClickableLogo = (): React.ReactElement => {
  /**
   * handles click of logo
   *
   * @returns {string} confirming the logo has been clicked
   *
   * @description This function is called when the user clicks on the logo. It logs a message to the console to confirm that the click has been registered.
   */

  const handleClick: () => void = () => {
    console.log('Click Registered');
  };

  return (
    <div className="logo-container" onClick={handleClick}>
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
