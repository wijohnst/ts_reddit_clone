import Icon from './Icon';
import { ReactComponent as RedditIcon } from '../../assets/redditIcon.svg';
import { ReactComponent as UserIcon } from '../../assets/userIcon.svg';
import { ReactComponent as HomeIcon } from '../../assets/homeIcon.svg';

export default {
  title: 'Components/Icon',
  component: Icon,
};

interface IconArgs {
  children: JSX.Element;
  style?: React.CSSProperties;
}

const Template = (args: IconArgs): JSX.Element => <Icon {...args} />;

export const Reddit = (args: IconArgs) => <Template {...args} />;
Reddit.args = {
  children: <RedditIcon color="#ff2800" />,
  style: {
    width: '100%',
    height: '100%',
    margin: '5px',
  },
};

export const User = (args: IconArgs) => <Template {...args} />;
User.args = {
  children: <UserIcon />,
  style: {
    width: '100%',
    height: '100%',
    margin: '5px',
  },
};

export const Home = (args: IconArgs) => <Template {...args} />;
Home.args = {
  children: <HomeIcon />,
  style: {
    width: '100%',
    height: '100%',
    margin: '5px',
  },
};
