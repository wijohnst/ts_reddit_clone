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

export const Reddit = (args: IconArgs) => (
  <Template {...args}>
    <RedditIcon color="#ff2800" />
  </Template>
);

export const User = (args: IconArgs) => (
  <Template {...args}>
    <UserIcon color="black" />
  </Template>
);

export const Home = (args: IconArgs) => (
  <Template {...args}>
    <HomeIcon color="black" />
  </Template>
);
