import Icon from './Icon';
import { ReactComponent as RedditIcon } from '../../assets/redditIcon.svg';
import { ReactComponent as UserIcon } from '../../assets/userIcon.svg';
import { ReactComponent as HomeIcon } from '../../assets/homeIcon.svg';

export default {
  title: 'Components/Icon',
  component: Icon,
};

interface IconArgs {
  /**
   * child icon SVG component passed to the Icon component
   */
  children: JSX.Element;
  /**
   * global css styles applied to all of our Icon components
   */
  style?: React.CSSProperties;
}

const sharedStyles = {
  width: '100%',
  height: '100%',
  margin: '5px',
};

const Template = (args: IconArgs): JSX.Element => <Icon {...args}></Icon>;

export const Reddit = (args: IconArgs) => <Template {...args} />;
Reddit.args = {
  children: <RedditIcon color="#ff2800" />,
  style: sharedStyles,
};

export const User = (args: IconArgs) => <Template {...args} />;
User.args = {
  children: <UserIcon />,
  style: sharedStyles,
};

export const Home = (args: IconArgs) => <Template {...args} />;
Home.args = {
  children: <HomeIcon />,
  style: sharedStyles,
};
