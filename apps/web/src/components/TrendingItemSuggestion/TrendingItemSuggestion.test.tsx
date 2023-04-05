import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { metaData } from './TISmetaData';
import TrendingItemSuggestion from './TrendingItemSuggestion';

describe('TrendingItemSuggestion', () => {
  const handleClick = jest.fn();

  it('should have an li element', () => {
    render(
      <TrendingItemSuggestion
        metaData={metaData}
        handleClick={handleClick}
        isLoading={true}
      />
    );
    expect(screen.getByTestId('list-item')).toBeInTheDocument();
  });

  it('should have an icon within the list-item-heading', () => {
    render(
      <TrendingItemSuggestion
        metaData={metaData}
        handleClick={handleClick}
        isLoading={true}
      />
    );
    expect(screen.getByTestId('list-item-heading-icon')).toBeInTheDocument();
  });

  it('should have an h1 within the list-item-heading', () => {
    render(
      <TrendingItemSuggestion
        metaData={metaData}
        handleClick={handleClick}
        isLoading={true}
      />
    );
    expect(screen.getByTestId('list-item-heading')).toBeInTheDocument();
  });

  it('should have an h2 within the li-text-container', () => {
    render(
      <TrendingItemSuggestion
        metaData={metaData}
        handleClick={handleClick}
        isLoading={true}
      />
    );
    expect(screen.getByTestId('list-item-summary')).toBeInTheDocument();
  });

  it('should have an icon within the list-item-target-subreddit', () => {
    render(
      <TrendingItemSuggestion
        metaData={metaData}
        handleClick={handleClick}
        isLoading={true}
      />
    );
    expect(screen.getByTestId('list-item-subreddit-icon')).toBeInTheDocument();
  });

  it('should have a paragraph within the list-item-target-subreddit', () => {
    render(
      <TrendingItemSuggestion
        metaData={metaData}
        handleClick={handleClick}
        isLoading={true}
      />
    );
    expect(screen.getByTestId('list-item-subreddit-link')).toBeInTheDocument();
  });

  it('should have an image within the list-item-preview-image-container', () => {
    render(
      <TrendingItemSuggestion
        metaData={metaData}
        handleClick={handleClick}
        isLoading={true}
      />
    );
    expect(screen.getByTestId('list-item-image')).toBeInTheDocument();
  });

  it('Should trigger handleClick via onClick', async () => {
    render(
      <TrendingItemSuggestion
        handleClick={handleClick}
        metaData={metaData}
        isLoading={true}
      />
    );

    await userEvent.click(screen.getByTestId('list-item'));
    expect(handleClick).toHaveBeenCalled();
  });
});
