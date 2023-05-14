import { rest } from 'msw';
import { setupServer } from 'msw/lib/node';
import { metaData } from '../components/TrendingItemSuggestion/TrendingItemSuggestion.utils';

const server = setupServer(
  rest.get('trending-suggestions', (req, res, ctx) => {
    return res(ctx.json([metaData, metaData, metaData]));
  })
);

export default server;
