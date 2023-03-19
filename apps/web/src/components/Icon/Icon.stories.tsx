import Icon, { iconColor } from './Icon';
import { ReactComponent as RedditIcon } from '../../assets/redditIcon.svg';
import { ReactComponent as UserIcon } from '../../assets/userIcon.svg';
import { ReactComponent as HomeIcon } from '../../assets/homeIcon.svg';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const Reddit = () => (
  <Icon colorProp={iconColor.Orange}>
    <RedditIcon />
  </Icon>
);

export const User = () => (
  <Icon colorProp={iconColor.Default}>
    <UserIcon />
  </Icon>
);

export const Home = () => (
  <Icon colorProp={iconColor.Default}>
    <HomeIcon />
  </Icon>
);
