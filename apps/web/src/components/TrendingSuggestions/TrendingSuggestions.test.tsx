import { waitFor, screen } from '@testing-library/react';
import server from '../../mocks/mockServer';
import { render } from '../../test/testSetup';
import TrendingSuggestions from './TrendingSuggestions';
import TestProviders from '../../test/testSetup';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('TrendingSuggestionList', () => {
  it('should render data correctly', async () => {
    render(<TrendingSuggestions />, { wrapper: TestProviders });

    // Wait for data to be fetched and rendered
    await waitFor(() => {
      const headings = screen.getAllByText('Search Preview Item Heading');
      expect(headings).toHaveLength(3);
    });
  });
});
