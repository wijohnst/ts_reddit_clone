import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Icon from '../Icon/Icon';
import { ReactComponent as ReactIcon } from '../../assets/reactSubRedditIcon.svg';
import TrendingItemSuggestion from './TrendingItemSuggestion';

describe('TrendingItemSuggestion', () => {
  const handleClick = jest.fn();

  const metaData = {
    URL: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80',
    trendingSuggestionHeading: 'Search Preview Item Heading',
    trendingSuggestionSummary: 'Search Preview Item Summary',
    targetSubreddit: {
      subRedditIcon: (
        <Icon>
          <ReactIcon />
        </Icon>
      ),
      subRedditName: 'r/SubbreditLink',
    },
  };

  it('should have an li element', () => {
    render(
      <TrendingItemSuggestion metaData={metaData} handleClick={handleClick} />
    );
    expect(screen.getByTestId('list-item')).toBeInTheDocument();
  });

  it('should have an icon within the list-item-heading', () => {
    render(
      <TrendingItemSuggestion metaData={metaData} handleClick={handleClick} />
    );
    expect(screen.getByTestId('list-item-heading-icon')).toBeInTheDocument();
  });

  it('should have an h1 within the list-item-heading', () => {
    render(
      <TrendingItemSuggestion metaData={metaData} handleClick={handleClick} />
    );
    expect(screen.getByTestId('list-item-heading')).toBeInTheDocument();
  });

  it('should have an h2 within the li-text-container', () => {
    render(
      <TrendingItemSuggestion metaData={metaData} handleClick={handleClick} />
    );
    expect(screen.getByTestId('list-item-summary')).toBeInTheDocument();
  });

  it('should have an icon within the list-item-target-subreddit', () => {
    render(
      <TrendingItemSuggestion metaData={metaData} handleClick={handleClick} />
    );
    expect(screen.getByTestId('list-item-subreddit-icon')).toBeInTheDocument();
  });

  it('should have a paragraph within the list-item-target-subreddit', () => {
    render(
      <TrendingItemSuggestion metaData={metaData} handleClick={handleClick} />
    );
    expect(screen.getByTestId('list-item-subreddit-link')).toBeInTheDocument();
  });

  it('should have an image within the list-item-preview-image-container', () => {
    render(
      <TrendingItemSuggestion metaData={metaData} handleClick={handleClick} />
    );
    expect(screen.getByTestId('list-item-image')).toBeInTheDocument();
  });

  it('Should trigger handleClick via onClick', async () => {
    render(
      <TrendingItemSuggestion handleClick={handleClick} metaData={metaData} />
    );

    await userEvent.click(screen.getByTestId('list-item'));
    expect(handleClick).toHaveBeenCalled();
  });
});
