import * as React from 'react';
import './Nav.scss';
import Icon from '../Icon/Icon';
import { ReactComponent as RedditIcon } from '../../assets/redditIcon.svg';
import { ReactComponent as HomeIcon } from '../../assets/homeIcon.svg';
import { ReactComponent as UserIcon } from '../../assets/userIcon.svg';

const Nav = (): React.ReactElement => {
  return (
    <div className="icon__container">
      <Icon>
        <RedditIcon color="#ff2800" />
      </Icon>
      <Icon>
        <HomeIcon />
      </Icon>
      <Icon>
        <UserIcon />
      </Icon>
    </div>
  );
};
export default Nav;
