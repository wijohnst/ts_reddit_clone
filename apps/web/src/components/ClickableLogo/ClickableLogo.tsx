import * as React from 'react';
import Icon from '../Icon/Icon';
import Wordmark from '../Wordmark/Wordmark';
import { ReactComponent as RedditIcon } from '../../assets/redditIcon.svg';

const ClickableLogo = (): React.ReactElement => {
  return (
    <>
      <Icon>
        <RedditIcon />
      </Icon>
      <Wordmark />
    </>
  );
};
export default ClickableLogo;
