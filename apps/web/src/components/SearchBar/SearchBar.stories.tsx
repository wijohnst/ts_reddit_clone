import * as React from 'react';
import SearchBar from './SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    handleSearch: { action: 'Searching..' },
  },
};

interface SearchBarArgs {
  handleSearch: () => void;
}

const Template = (args: SearchBarArgs) => <SearchBar {...args} />;
