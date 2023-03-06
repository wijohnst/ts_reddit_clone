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
}

const Template = (args: IconArgs): JSX.Element => <Icon {...args}></Icon>;

export const Reddit = (args: IconArgs) => <Template {...args} />;
Reddit.args = {
  children: <RedditIcon color="#ff2800" />,
};

export const User = (args: IconArgs) => <Template {...args} />;
User.args = {
  children: <UserIcon color="black" />,
};

export const Home = (args: IconArgs) => <Template {...args} />;
Home.args = {
  children: <HomeIcon color="black" />,
};
