import * as React from 'react';
import { useQuery } from 'react-query';
import fetchTrendingSuggestions from './TrendingSuggestions.api';
import TrendingSuggestionList from '../TrendingSuggestionList/TrendingSuggestionList';

const TrendingSuggestions = () => {
  const { data, isLoading } = useQuery(
    ['trending-suggestions'],
    () => fetchTrendingSuggestions(),
    { staleTime: Infinity }
  );

  // placeholder func, will be removed when we add react router + refactor
  // ticket: https://github.com/users/wijohnst/projects/10/views/1?pane=issue&itemId=27392872
  const handleClick = () => {
    console.log('temp');
  };

  return (
    <>
      <TrendingSuggestionList
        metaDataItems={data}
        isLoading={isLoading}
        handleClick={handleClick}
      />
    </>
  );
};

export default TrendingSuggestions;
