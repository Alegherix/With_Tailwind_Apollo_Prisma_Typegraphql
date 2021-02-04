import React from 'react';
import { gql, useQuery } from '@apollo/client';

const HELLO_QUERY = gql`
  query {
    hello
  }
`;

const Hello: React.FC = () => {
  const { data, loading } = useQuery(HELLO_QUERY);
  return (
    <>
      {loading && <p>loading...</p>}
      {!loading && <pre>{JSON.stringify(data)}</pre>}
    </>
  );
};

export default Hello;
