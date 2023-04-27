import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FeedGroup from './FeedGroup';
import { feedItems } from './FeedGroup.utils';

export default {
  title: 'Components/FeedGroup',
  component: FeedGroup,
} as ComponentMeta<typeof FeedGroup>;

const Template: ComponentStory<typeof FeedGroup> = (args) => (
  <FeedGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  heading: 'FEEDS',
  feedItems: feedItems,
};
