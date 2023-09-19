import axios from 'axios';
import { useQuery } from 'react-query';

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};
export const usePaginatedQueriesData = ({ pageNumber }) => {
  return useQuery(['colors', pageNumber], () => fetchColors(pageNumber), {
    keepPreviousData: true,
  });
};
