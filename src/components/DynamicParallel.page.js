import React from 'react';
import { useparllelSuperHerosData } from '../hooks/useParallelSuperHerosData';

export const DynamicParallelPage = () => {
  const heroes = useparllelSuperHerosData({ heroIds: [1, 2, 3] });

  return (
    <div>
      <h2>Dynamic Parallel Queries</h2>
      {heroes?.map((hero) => {
        return <div key={hero.data?.data.id}>{hero.data?.data.name}</div>;
      })}
    </div>
  );
};
