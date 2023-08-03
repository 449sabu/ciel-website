import type { AppProps } from "next/app";
import { useState } from 'react';
import Head from "next/head";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from "@mantine/core";
import Layout from "@/components/Layout";

export default function App(props: AppProps) {
	const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	return (
		<>
			<Head>
				<title>Page title</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					// colorScheme: "light",
					globalStyles: (theme) => ({
						body: {
							backgroundColor:
								theme.colorScheme === "dark" ? "rgb(43,47,55)" : "#F0F0F0",
              // maxWidth: "80rem",
              // margin: "auto"
						},
						".fontNm": {
							color: "#F0F0F0",
							textShadow: "6px 6px 12px #dadada, -6px -6px 12px #ffffff",
						},
					}),
				}}
			>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</MantineProvider>
      </ColorSchemeProvider>
		</>
	);
}
