import { render, screen } from '@testing-library/react';
import FeedItem, { Props } from './FeedItem';
import { ReactComponent as HomeIcon } from '../../assets/homeIcon.svg';

describe('FeedItem component', () => {
  const defaultProps: Props = {
    svg: <HomeIcon />,
    label: 'Home',
    href: '',
  };

  it('renders the SVG icon and label and checks that both are in the document', () => {
    render(<FeedItem {...defaultProps} />);
    expect(screen.getByTestId('Home')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders an anchor tag with the correct href', () => {
    render(<FeedItem {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '');
  });
});
