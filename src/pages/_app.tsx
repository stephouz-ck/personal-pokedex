import { AppProps } from "next/app";
import Head from "next/head";
import { Box, Button, Group, MantineProvider, Image } from "@mantine/core";
import { theme } from "../styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Head>
          <title>Personal PokéDex</title>
        </Head>
        <Component {...pageProps} />
      </MantineProvider>
    </QueryClientProvider>
  );
}
