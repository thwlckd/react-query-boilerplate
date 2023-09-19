import React from 'react';
import { Outlet } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Layout } from './components/Layout';
import './App.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Layout />
        <Outlet />
        <ReactQueryDevtools initialIsOpem={false} position="bottom-right" />
      </QueryClientProvider>
    </div>
  );
};

export default App;
