import { rest } from 'msw';
import { metaDataItems } from '../components/TrendingSuggestionList/TrendingSuggestionList.utils';

export const handlers = [
  rest.get('/trending-suggestions', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(metaDataItems));
  }),
];
