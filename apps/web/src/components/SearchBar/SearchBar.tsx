import * as React from 'react';
import { useRef } from 'react';
import './SearchBar.scss';

export interface Props {
  /** What happens when we use a searchstring to search for results? */
  handleSearch: (searchString: string) => void;
  /**  An optional custom test ID for the component.  */
  customTestId?: string;
}

/**
 * A component that renders a searchbar
 *
 * @param {Object} props - The component props
 * @param {function} handleSearch - Invoked when the user presses enter
 * @param {string} customTestId - An optional custom test ID for the component
 * @returns {React.ReactElement} - The rendered component
 */
const SearchBar = ({
  handleSearch,
  customTestId = 'searchbar',
}: Props): React.ReactElement => {
  const ref = useRef<HTMLInputElement>(null);

  /**
   * Handles a keydown event on the searchbar input
   *
   * @param {React.KeyboardEvent} - Keydown event.
   * @returns {void}
   */
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      const searchString = ref.current?.value;
      if (searchString !== undefined && searchString !== null) {
        handleSearch(searchString);
      }
    }
  };

  return (
    <div className="searchbar-container" data-testid="searchbar-container">
      <input
        ref={ref}
        data-testid={customTestId}
        type="search"
        placeholder="Search Reddit"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
export default SearchBar;
