import React, { useState } from 'react';
import {
  useAddSuperHeroData,
  useSuperHeroesData,
} from '../hooks/useSuperHeroesData';
import { Link } from 'react-router-dom';

export const RQSuperHeroesPage = () => {
  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');

  const onSuccess = (data) => {
    console.log('Perform side effect after data fetching', data);
  };

  const onError = (error) => {
    console.log('Perform side effect after encountering error', error);
  };

  const { isLoading, data, error, refetch } = useSuperHeroesData(
    onSuccess,
    onError,
  );

  const {
    mutate: addHero,
    isLoading: isLoadingAdd,
    error: addingError,
  } = useAddSuperHeroData();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const hero = { name, alterEgo };
    addHero(hero);
  };

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>{error.message}</h2>;

  return (
    <>
      <h2>RQSuperHeroesPage</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button>Add Hero</button>
      </form>
      {isLoadingAdd && <span>Adding...</span>}
      {addingError && <span>{addingError.message}</span>}
      <button onClick={refetch}>Fetch heores</button>
      {data?.data.map((hero) => (
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </>
  );
};
