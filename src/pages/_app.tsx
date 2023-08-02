// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
          globalStyles: (theme) => ({
            body: {
              backgroundColor: theme.colorScheme === 'dark' ? "rgb(43,47,55)" : "#F0F0F0",
            },
            ".fontNm": {
              color: "#F0F0F0",
              textShadow: "6px 6px 12px #dadada, -6px -6px 12px #ffffff"
            }
          })
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
