import Icon from './Icon';
import { ReactComponent as RedditIcon } from '../../assets/redditIcon.svg';
import { ReactComponent as UserIcon } from '../../assets/userIcon.svg';
import { ReactComponent as HomeIcon } from '../../assets/homeIcon.svg';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const Reddit = () => (
  <Icon>
    <RedditIcon color="#ff2800" />
  </Icon>
);

export const User = () => (
  <Icon>
    <UserIcon color="black" />
  </Icon>
);

export const Home = () => (
  <Icon>
    <HomeIcon color="black" />
  </Icon>
);
