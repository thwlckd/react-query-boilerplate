import axios from 'axios';
import { useQueries } from 'react-query';

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useparllelSuperHerosData = ({ heroIds }) => {
  return useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHero(id),
        // select: (data) => (data = data.data),
      };
    }),
  );
};
