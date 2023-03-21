import * as React from 'react';
import './ClickableLogo.scss';
import Icon, { iconColor } from '../Icon/Icon';
import Wordmark from '../Wordmark/Wordmark';
import { ReactComponent as RedditIcon } from '../../assets/redditIcon.svg';

const ClickableLogo = (): React.ReactElement => {
  return (
    <div className="logo-container">
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
