import * as React from 'react';
import { useState } from 'react';
import './SearchBar.scss';

export interface Props {
  /** What happens when we use a searchstring to search for results? */
  handleSearch: (searchString: string) => void;
  /**  An optional custom test ID for the component.  */
  customTestId?: string;
}

// need to add jsdoc comment
const SearchBar = ({
  handleSearch,
  customTestId = 'searchbar',
}: Props): React.ReactElement => {
  /** Tracks the string value within input */
  const [searchString, setSearchString] = useState<string>('');

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

  return (
    <div className="searchbar-container" data-testid="searchbar-container">
      <input
        data-testid={customTestId}
        type="search"
        placeholder="Search Reddit"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
export default SearchBar;
