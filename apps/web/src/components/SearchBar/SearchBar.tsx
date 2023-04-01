import * as React from 'react';
import { useRef } from 'react';
import './SearchBar.scss';
import SearchIcon from '../../assets/searchIcon.svg';

export interface Props {
  /** What happens when we use a searchstring to search for results? */
  handleSearch: (searchString: string) => void;
  /** What happens when a user begins typing what they're searching for? */
  filterResults: (searchString: string) => object[];
  /** An optional custom test ID for the component.  */
  customTestId?: string;
}

/**
 * A component that renders a SearchBar
 *
 * @param {Object} props - The component props
 * @param {function} handleSearch - Invoked when the user presses enter
 * @param {function} filterResults - Invoked when the user begins typing into input
 * @param {string} customTestId - An optional custom test ID for the component
 * @returns {React.ReactElement} - The rendered component
 */

const SearchBar = ({
  handleSearch,
  filterResults,
  customTestId = 'searchbar',
}: Props): React.ReactElement => {
  const ref = useRef<HTMLInputElement>(null);

  /**
   * Handles a keydown event on the searchbar input
   *
   * @param {React.KeyboardEvent} - Keydown event.
   * @returns {void}
   */
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      const searchString = ref.current?.value;
      if (
        searchString !== undefined &&
        searchString !== null &&
        searchString !== ''
      ) {
        handleSearch(searchString);
      }
    }
  };

  /**
   * Handles any input changes by passing the current input value to filterResults
   */
  const handleOnChange = (): void => {
    const searchString = ref.current?.value;

    if (
      searchString !== undefined &&
      searchString !== null &&
      searchString !== ''
    ) {
      // commented bc func causes error onChange as it is not being passed from parent
      //filterResults(searchString);
    }
  };

  /**
   * Triggers handleSearch onclick of the searchIcon
   */
  const handleClick = (): void => {
    const searchString = ref.current?.value;
    if (
      searchString !== null &&
      searchString !== undefined &&
      searchString !== ''
    ) {
      handleSearch(searchString);
    }
  };

  return (
    <div className="searchbar-container" data-testid="searchbar-container">
      <img src={SearchIcon} alt="search-icon" />
      <input
        ref={ref}
        data-testid={customTestId}
        type="search"
        placeholder="Search Reddit"
        onKeyDown={handleKeyDown}
        onChange={handleOnChange}
      />
    </div>
  );
};
export default SearchBar;
