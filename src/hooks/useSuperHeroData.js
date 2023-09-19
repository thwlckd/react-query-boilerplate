import { useQueryClient, useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroeData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(
    ['super-hero', heroId],
    // () => fetchSuperHero(heroId)
    fetchSuperHero, // queryFn에 직접 매개변수를 전달하지 않고 queryKey를 이용
    {
      initialData: () => {
        const hero = queryClient
          .getQueryData('super-heroes')
          ?.data?.find((hero) => hero.id === Number(heroId));
        if (hero) return { data: hero };
        else return null;
      },
    },
  );
};
