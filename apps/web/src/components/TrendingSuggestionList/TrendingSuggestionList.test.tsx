import { screen, render, waitFor } from '@testing-library/react';
import TrendingSuggestionList from './TrendingSuggestionList';
import data from '../../../public/Data/SuggestedItems.json';

import { QueryClient, QueryClientProvider } from 'react-query';

describe('TrendingSuggestionList', () => {
  it('should have a ul element', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <TrendingSuggestionList />
      </QueryClientProvider>
    );
    expect(screen.getByTestId('suggestion-list')).toBeInTheDocument();
  });

  it('should render the same amount of items within data', async () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <TrendingSuggestionList />
      </QueryClientProvider>
    );
    await waitFor(async () => {
      const SuggestionListItems = await screen.findAllByTestId('list-item');
      expect(SuggestionListItems.length).toEqual(data.length);
    });
  });
});
