import * as React from 'react';
import { useState } from 'react';

//where does this function live that is being passed?
interface Props {
  handleSearch: (searchString: string) => void;
}

const SearchBar = (props: Props) => {
  const [searchString, setSearchString] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      props.handleSearch(searchString);
    }
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
      <p>{searchString}</p>
    </>
  );
};
export default SearchBar;
