import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const handleSearch = jest.fn();
  const filterResults = jest.fn();

  it('should have an img element', () => {
    render(
      <SearchBar handleSearch={handleSearch} filterResults={filterResults} />
    );
    expect(
      screen.getByTestId('searchbar-container-search-icon')
    ).toBeInTheDocument();
  });

  it('should have a input element', () => {
    render(
      <SearchBar handleSearch={handleSearch} filterResults={filterResults} />
    );
    expect(screen.getByTestId('searchbar')).toBeInTheDocument();
  });

  it('Should trigger handleFilter onChange of the input', async () => {
    const searchString = 'Test String';
    render(
      <SearchBar handleSearch={handleSearch} filterResults={filterResults} />
    );

    await userEvent.type(screen.getByTestId('searchbar'), searchString);

    expect(filterResults).toHaveBeenCalledWith(searchString);
  });

  it('Should trigger handleSearch via handleKeyDown', async () => {
    const searchString = 'Test String';
    render(
      <SearchBar handleSearch={handleSearch} filterResults={filterResults} />
    );
    await userEvent.type(
      screen.getByTestId('searchbar'),
      searchString + '{enter}'
    );
    expect(handleSearch).toHaveBeenCalledWith(searchString);
  });

  it('Should trigger handleSearch via onClick of searchIcon', async () => {
    const searchString = 'Test String';
    render(
      <SearchBar handleSearch={handleSearch} filterResults={filterResults} />
    );

    await userEvent.type(screen.getByTestId('searchbar'), searchString);

    await userEvent.click(
      screen.getByTestId('searchbar-container-search-icon')
    );
    expect(handleSearch).toHaveBeenCalledWith(searchString);
  });
});
