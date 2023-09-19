import React from 'react';
import { useDependentQueriesData } from '../hooks/userDependentQueriesData';

export const DependentQueriesPage = () => {
  const { data, isLoading, error } = useDependentQueriesData({
    email: 'vishwas@example.com',
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>{error.message}</h2>;

  console.log(data);

  return (
    <div>
      <h2>DependentQueries</h2>
      {data?.data.courses.map((course) => (
        <div key={course}>{course}</div>
      ))}
    </div>
  );
};
