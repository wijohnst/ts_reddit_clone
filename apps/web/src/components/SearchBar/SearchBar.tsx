import * as React from 'react';
import { useState } from 'react';
import Icon from '../Icon/Icon';
import { ReactComponent as SearchIcon } from '../../assets/searchIcon.svg';

interface Props {
  /** What happens when we use a searchstring to search for results? */
  handleSearch: (searchString: string) => void;
}

// need to add jsdoc comment
const SearchBar = ({ handleSearch }: Props) => {
  const [searchString, setSearchString] = useState('');

  /**
   * Checks for 'Enter' keydown & invokes handleSearch func
   */
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      handleSearch(searchString);
    }
  };

  // need to add jsdoc comment + type
  const handleClick = (): void => {
    handleSearch(searchString);
  };

  return (
    <>
      <input
        type="search"
        placeholder="Search Reddit"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Icon onClick={handleClick}>
        <SearchIcon />
      </Icon>

      <p>{searchString}</p>
    </>
  );
};
export default SearchBar;
