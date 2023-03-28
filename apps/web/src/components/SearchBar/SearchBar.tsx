import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import Icon from '../Icon/Icon';
import { ReactComponent as SearchIcon } from '../../assets/searchIcon.svg';
import { iconColor } from '../Icon/Icon';
import './SearchBar.scss';

export interface Props {
  /** What happens when we use a searchstring to search for results? */
  handleSearch: (searchString: string) => void;
}

// need to add jsdoc comment
const SearchBar = ({ handleSearch }: Props) => {
  /** Represents our input */
  const ref = useRef<HTMLInputElement>(null);

  /** Tracks the value our input currently holds */
  const [searchString, setSearchString] = useState<string>('');

  /** Tracks if our input is currently focused */
  const [inputFocus, setInputFocus] = useState<boolean>(false);

  /** Checks if any elements on page are focused + if it's the input. If true, we set our focus to true */
  useEffect(() => {
    if (document.hasFocus() && ref.current?.contains(document.activeElement)) {
      setInputFocus(true);
    }
  }, []);

  /**
   * Handles 'Enter' key press & invokes `handleSearch` func
   *
   * @param {React.KeyboardEvent} event - The keyboard event that triggered the function.
   */
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      handleSearch(searchString);
    }
  };

  /**
   * Handles click & invokes `handleSearch` func
   */
  const handleClick = (): void => {
    handleSearch(searchString);
  };

  return (
    <div className="searchbar-container">
      <input
        type="search"
        ref={ref}
        placeholder="Search Reddit"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
      <div className="icon-container">
        <Icon onClick={handleClick} colorProp={iconColor.Grey}>
          <SearchIcon />
        </Icon>
      </div>
    </div>
  );
};
export default SearchBar;
