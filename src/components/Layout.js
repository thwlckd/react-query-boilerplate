import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super-heroes">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-dynamic-parallel">Dynamic RQ Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-dependent-queries">RQ Dependent Queries</Link>
          </li>
          <li>
            <Link to="/rq-paginated">RQ Pagination</Link>
          </li>
          <li>
            <Link to="/rq-infinited">RQ Infinite Queries</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
