import * as React from 'react';
import TrendingSuggestionList from './TrendingSuggestionList';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './TrendingSuggestionList.scss';
import { metaDataItems } from './TrendingSuggestionList.utils';

export default {
  title: 'Components/TrendingSuggestionList',
  component: TrendingSuggestionList,
  argTypes: {
    isLoading: { control: 'boolean' },
    isFetched: { control: 'boolean' },
    isFetching: { control: 'boolean' },
  },
} as ComponentMeta<typeof TrendingSuggestionList>;

const Template: ComponentStory<typeof TrendingSuggestionList> = (args) => (
  <TrendingSuggestionList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  isFetching: false,
  isFetched: true,
  metaDataItems: metaDataItems,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  isFetching: true,
  isFetched: false,
  metaDataItems: metaDataItems,
};
