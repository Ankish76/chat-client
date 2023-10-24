import React from "react";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";

import theme from "@web/styles/theme/config";
import { useApollo } from "@web/graphql";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@web/store";

const App = ({ Component, pageProps }: AppProps) => {
  const client = useApollo({
    ...pageProps,
  });
  return (
    <ConfigProvider theme={theme}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </ApolloProvider>
    </ConfigProvider>
  );
};

export default App;
