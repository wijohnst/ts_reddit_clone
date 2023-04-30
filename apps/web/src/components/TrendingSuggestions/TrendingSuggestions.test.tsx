import { render, waitFor, screen } from '@testing-library/react';
import TrendingSuggestions from './TrendingSuggestions';
import { QueryClient, QueryClientProvider } from 'react-query';
import server from '../../mocks/mockServer';

const queryClient = new QueryClient();

const QueriedComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TrendingSuggestions />
    </QueryClientProvider>
  );
};

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('TrendingSuggestionList', () => {
  it('should render data correctly', async () => {
    render(<QueriedComponent />);

    // Wait for data to be fetched and rendered
    await waitFor(() => {
      const headings = screen.getAllByText('Search Preview Item Heading');
      expect(headings).toHaveLength(3);
    });
  });
});
