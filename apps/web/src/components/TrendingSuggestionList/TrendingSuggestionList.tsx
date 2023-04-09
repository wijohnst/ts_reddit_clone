import * as React from 'react';
import { useQuery } from 'react-query';
import { useAppSelector } from '../../app/hooks';
import { selectDisplaySuggestions } from '../../features/TrendingItemSuggestion/DisplaySuggestionsSlice';

const TrendingSuggestionList = (): React.ReactElement => {
  const displayTrendingList = useAppSelector(selectDisplaySuggestions);
  const { isLoading, error, data } = useQuery('suggested-items', async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=4');
    const data = await response.json();
    console.log(data);
    return data;
  });

  return (
    <ul className={isLoading ? '' : 'hide'}>
      <p>{displayTrendingList.toString()}</p>
    </ul>
  );
};
export default TrendingSuggestionList;
