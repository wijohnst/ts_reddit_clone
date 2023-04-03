import * as React from 'react';
import SearchBar from './SearchBar';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    handleSearch: { action: 'Searching..' },
  },
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Default = Template.bind({});
