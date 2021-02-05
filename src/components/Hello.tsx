import React from 'react';
import { gql, useQuery } from '@apollo/client';

const HELLO_QUERY = gql`
  query HelloQuery {
    hello
  }
`;

const Hello: React.FC = () => {
  const { data, loading } = useQuery(HELLO_QUERY);
  return (
    <div>
      <p className="text-lg mt-2 mb-4">Data from doing a query below:</p>
      {loading && <p>loading...</p>}
      {!loading && <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
};

export default Hello;
