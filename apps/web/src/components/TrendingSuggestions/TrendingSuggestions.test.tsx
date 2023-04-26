import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen } from '@testing-library/react';
import TrendingSuggestions from './TrendingSuggestions';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const server = setupServer(
  rest.get('trending-suggestions', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          URL: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80',
          trendingSuggestionHeading: 'Search Preview Item Heading 1',
          trendingSuggestionSummary: 'Search Preview Item Summary',
          targetSubreddit: {
            subRedditIcon: 'temp',
            subRedditName: 'r/SubbreditLink',
          },
        },
        {
          URL: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80',
          trendingSuggestionHeading: 'Search Preview Item Heading 2',
          trendingSuggestionSummary: 'Search Preview Item Summary',
          targetSubreddit: {
            subRedditIcon: 'temp',
            subRedditName: 'r/SubbreditLink',
          },
        },
        {
          URL: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80',
          trendingSuggestionHeading: 'Search Preview Item Heading 3',
          trendingSuggestionSummary: 'Search Preview Item Summary',
          targetSubreddit: {
            subRedditIcon: 'temp',
            subRedditName: 'r/SubbreditLink',
          },
        },
      ])
    );
  })
);

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
      expect(
        screen.getByText('Search Preview Item Heading 1')
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByText('Search Preview Item Heading 2')
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByText('Search Preview Item Heading 3')
      ).toBeInTheDocument();
    });
  });
});
