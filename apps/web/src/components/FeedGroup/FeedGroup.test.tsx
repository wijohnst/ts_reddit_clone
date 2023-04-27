import { render, screen } from '@testing-library/react';
import FeedGroup from './FeedGroup';
import { feedItems } from './FeedGroup.utils';

describe('FeedGroup component', () => {
  it('renders the appropriate heading and FeedItems', () => {
    render(<FeedGroup heading={'FEEDS'} feedItems={feedItems} />);
    expect(screen.getByText('FEEDS')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByTestId('Home')).toBeInTheDocument();
    expect(screen.getByText('Popular')).toBeInTheDocument();
    expect(screen.getByTestId('Popular')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      ''
    );
    expect(screen.getByRole('link', { name: 'Popular' })).toHaveAttribute(
      'href',
      '/popular'
    );
  });
});
