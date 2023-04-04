import * as React from 'react';
import TrendingItemSuggestion from './TrendingItemSuggestion';
import { ReactComponent as ReactIcon } from '../../assets/reactSubRedditIcon.svg';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from '../Icon/Icon';
import './TrendingItemSuggestion.scss';

export default {
  title: 'Components/TrendingItemSuggestion',
  component: TrendingItemSuggestion,
  argTypes: {
    metaData: { control: 'object' },
    handleClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof TrendingItemSuggestion>;

const Template: ComponentStory<typeof TrendingItemSuggestion> = (args) => (
  <TrendingItemSuggestion {...args} />
);

export const Default = Template.bind({});
Default.args = {
  metaData: {
    URL: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80',
    trendingSuggestionHeading: 'Search Preview Item Heading',
    trendingSuggestionSummary: 'Search Preview Item Summary',
    targetSubreddit: {
      subRedditIcon: (
        <Icon>
          <ReactIcon />
        </Icon>
      ),
      subRedditName: 'r/SubbreditLink',
    },
  },
};
