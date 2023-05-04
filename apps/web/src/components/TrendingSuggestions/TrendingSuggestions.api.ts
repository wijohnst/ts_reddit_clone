import * as React from 'react';
import axios from 'axios';

const fetchTrendingSuggestions = async () => {
  try {
    const response = await axios.get('/trending-suggestions');
    return response.data;
  } catch (error) {
    return error;
  }
};

export default fetchTrendingSuggestions;
