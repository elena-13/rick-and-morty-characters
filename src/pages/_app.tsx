import { ApolloProvider } from '@apollo/client';

import { ConfigProvider } from 'antd';

import type { AppProps } from 'next/app';

import theme from '@/theme/themeConfig';

import { useApollo } from '@/lib/apollo-client';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <ConfigProvider theme={theme}>
        <Component {...pageProps} />
      </ConfigProvider>
    </ApolloProvider>
  );
}

export default App;
