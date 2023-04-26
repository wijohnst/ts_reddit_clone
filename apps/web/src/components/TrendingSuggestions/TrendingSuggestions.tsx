import * as React from 'react';
import { useQuery } from 'react-query';
import fetchTrendingSuggestions from './TrendingSuggestions.api';
import TrendingSuggestionList from '../TrendingSuggestionList/TrendingSuggestionList';

const TrendingSuggestions = () => {
  const { data, isLoading } = useQuery(
    ['trending-suggestions'],
    () => {
      const response = fetchTrendingSuggestions();
      return response;
    },
    { staleTime: Infinity }
  );

  // placeholder func, will be removed when we add react router + refactor
  const handleClick = () => {
    console.log('temp');
  };

  return (
    <>
      {data && (
        <TrendingSuggestionList
          metaDataItems={data}
          isLoading={isLoading}
          handleClick={handleClick}
        />
      )}
    </>
  );
};

export default TrendingSuggestions;
