import * as React from 'react';
import TrendingItemSuggestion from './TrendingItemSuggestion';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './TrendingItemSuggestion.scss';
import { metaData } from './TrendingItemSuggestion.utils';

export default {
  title: 'Components/TrendingItemSuggestion',
  component: TrendingItemSuggestion,
  argTypes: {
    metaData: { control: 'object' },
    handleClick: { action: 'clicked' },
    isLoading: { control: 'boolean' },
  },
} as ComponentMeta<typeof TrendingItemSuggestion>;

const Template: ComponentStory<typeof TrendingItemSuggestion> = (args) => (
  <TrendingItemSuggestion {...args} />
);

export const Default = Template.bind({});
Default.args = { metaData: metaData, isLoading: false };

export const Loading = Template.bind({});
Loading.args = { ...Default.args, isLoading: true };
