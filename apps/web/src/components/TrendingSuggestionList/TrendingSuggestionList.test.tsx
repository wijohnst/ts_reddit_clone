import { screen, render } from '@testing-library/react';
import TrendingSuggestionList from './TrendingSuggestionList';
import { metaDataItems } from './TrendingSuggestionList.utils';

describe('TrendingSuggestionList', () => {
  const handleClick = jest.fn();
  it('should have a ul element', () => {
    render(
      <TrendingSuggestionList
        metaDataItems={metaDataItems}
        isLoading={false}
        handleClick={handleClick}
      />
    );
    expect(screen.getByTestId('suggestion-list')).toBeInTheDocument();
  });

  it('should have a ul element when loading', () => {
    render(
      <TrendingSuggestionList
        metaDataItems={metaDataItems}
        isLoading={true}
        handleClick={handleClick}
      />
    );
    expect(screen.getByTestId('suggestion-list')).toBeInTheDocument();
  });

  it('should render the same amount of items within data', () => {
    render(
      <TrendingSuggestionList
        metaDataItems={metaDataItems}
        isLoading={false}
        handleClick={handleClick}
      />
    );
    const listItem = screen.getAllByTestId('list-item');
    expect(listItem.length).toEqual(metaDataItems.length);
  });
});
