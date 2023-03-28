import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const handleSearch = jest.fn();

  // testing for Icon component
  it('Should have an SVG icon', () => {
    render(<SearchBar handleSearch={handleSearch} />);
    expect(screen.getByTestId('searchbar-container')).toBeInTheDocument();
  });

  // testing for input element
  it('should have a input element', () => {
    render(<SearchBar handleSearch={handleSearch} />);
    expect(screen.getByTestId('searchbar')).toBeInTheDocument();
  });

  //testing that our handleSearch fires
  it('Should trigger handleSearch via handleKeyDown', async () => {
    const searchString = 'Test String';
    render(<SearchBar handleSearch={handleSearch} />);
    await userEvent.type(
      screen.getByTestId('searchbar'),
      searchString + '{enter}'
    );
    expect(handleSearch).toHaveBeenCalledWith(searchString);
  });
});
