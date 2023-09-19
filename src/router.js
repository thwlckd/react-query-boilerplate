import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { HomePage } from './components/Home.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { RQSuperHeroPage } from './components/RQSuperHero.page';
import { DynamicParallelPage } from './components/DynamicParallel.page';
import { DependentQueriesPage } from './components/DependentQueries.page';
import { PaginatedQueriesPage } from './components/PaginatedQueries.page';
import { InfiniteQueriesPage } from './components/InfiniteQueries.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'super-heroes',
        element: <SuperHeroesPage />,
      },
      {
        path: 'rq-super-heroes',
        element: <RQSuperHeroesPage />,
      },
      {
        path: 'rq-super-heroes/:heroId',
        element: <RQSuperHeroPage />,
      },
      {
        path: 'rq-dynamic-parallel',
        element: <DynamicParallelPage />,
      },
      {
        path: 'rq-dependent-queries',
        element: <DependentQueriesPage />,
      },
      {
        path: 'rq-paginated',
        element: <PaginatedQueriesPage />,
      },
      {
        path: 'rq-infinited',
        element: <InfiniteQueriesPage />,
      },
    ],
  },
]);

export default router;
