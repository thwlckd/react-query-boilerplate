import { useMutation, useQuery, useQueryClient } from 'react-query';
import { request } from '../utils/axios-utiles';
// import axios from 'axios';

const fetchSuperHeroes = () => {
  return request({ url: '/superheroes' });
  // return axios.get('http://localhost:4000/superheroes');
};

const addSuperHero = (hero) => {
  return request({ url: '/superheroes', method: 'post', data: hero });
  // return axios.post('http://localhost:4000/superheroes', hero);
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery(['super-heroes'], fetchSuperHeroes, {
    // default query options
    // cacheTime: 50000,
    // staleTime: 0,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // refetchInterval: false,
    // refetchIntervalInBackground: false,

    // enabled: false,
    onSuccess,
    onError,
    // select: (data) => {
    //   return data.data.map((hero) => hero.name);
    // },
  });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    // invalidation을 통한 refetching
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ['super-heroes'] });
    // },
    // Update from Mutation Responses without network request
    // onSuccess: (data) => {
    //   queryClient.setQueryData(
    //     { queryKey: ['super-heroes'] },
    //     (oldQueryData) => {
    //       return { ...oldQueryData, data: [...oldQueryData.data, data.data] };
    //     },
    //   );
    // },

    onMutate: async (newHero) => {
      await queryClient.cancelQueries('super-heroes');
      const previousHeroData = queryClient.getQueryData('super-heroes');
      queryClient.setQueryData(
        { queryKey: ['super-heroes'] },
        (oldQueryData) => {
          return {
            ...oldQueryData,
            data: [
              ...oldQueryData.data,
              { id: oldQueryData?.data?.length + 1, ...newHero },
            ],
          };
        },
      );
      return { previousHeroData };
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData('super-heroes', context.previousHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries('super-heroes');
    },
  });
};
