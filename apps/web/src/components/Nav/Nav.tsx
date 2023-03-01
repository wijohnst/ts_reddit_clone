import * as React from 'react';
import './Nav.scss';
import Icon from '../Icon/Icon';
import { ReactComponent as redditIcon } from '../../assets/redditIcon.svg';
import { ReactComponent as homeIcon } from '../../assets/homeIcon.svg';
import { ReactComponent as userIcon } from '../../assets/userIcon.svg';

const Nav = (): React.ReactElement => {
  return (
    <div className="icon__container">
      <Icon svg={redditIcon} color={'#ff2800'} />
      <Icon svg={homeIcon} />
      <Icon svg={userIcon} />
    </div>
  );
};
export default Nav;
