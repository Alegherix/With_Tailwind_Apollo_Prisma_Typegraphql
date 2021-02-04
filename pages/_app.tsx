import { useApollo } from '../src/apollo';
import { ApolloProvider } from '@apollo/client';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
