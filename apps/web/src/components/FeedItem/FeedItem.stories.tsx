import * as React from 'react';
import FeedItem from './FeedItem';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactComponent as HomeIcon } from '../../assets/homeIcon.svg';

export default {
  title: 'Components/FeedItem',
  component: FeedItem,
} as ComponentMeta<typeof FeedItem>;

const Template: ComponentStory<typeof FeedItem> = (args) => (
  <div style={{ height: '35px' }}>
    <FeedItem {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  svg: <HomeIcon />,
  label: 'Home',
  href: '',
};
