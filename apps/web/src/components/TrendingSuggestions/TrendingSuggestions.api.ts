import * as React from 'react';
import axios from 'axios';

const fetchTrendingSuggestions = async () => {
  try {
    const response = await axios.get('/trending-suggestions');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default fetchTrendingSuggestions;
