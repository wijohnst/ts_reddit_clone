import * as React from 'react';
import TrendingSuggestionList from './TrendingSuggestionList';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './TrendingSuggestionList.scss';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default {
  title: 'Components/TrendingSuggestionList',
  component: TrendingSuggestionList,
  argTypes: {
    isLoading: { control: 'boolean' },
  },
} as ComponentMeta<typeof TrendingSuggestionList>;

const Template: ComponentStory<typeof TrendingSuggestionList> = () => (
  <QueryClientProvider client={queryClient}>
    <TrendingSuggestionList />
  </QueryClientProvider>
);

export const Default = Template.bind({});
Default.args = { isLoading: false };

export const Loading = Template.bind({});
Loading.args = { isLoading: true };
