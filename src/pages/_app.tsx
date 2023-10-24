import React from "react";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";

import theme from "@/styles/theme/config";
import { useApollo } from "@/graphql";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/store";

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
