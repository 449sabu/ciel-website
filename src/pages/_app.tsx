import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { Notifications } from "@mantine/notifications";
import Layout from "@/components/Templates/Layout";

export default function App(props: AppProps) {
	const { Component, pageProps } = props;

	// Tanstack Query
	const queryClient = new QueryClient()

	// local storage を使用したテーマの保存
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: "mantine-color-scheme",
		defaultValue: "light",
		getInitialValueInEffect: true,
	});
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
	useHotkeys([["mod+J", () => toggleColorScheme()]]);

	return (
		<>
			<Head>
				<title>Page title</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<QueryClientProvider client={queryClient}>
			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{
						colorScheme,
						colors: {
							nmLight: ["#F0F0F0"],
							nmDark: ["rgb(41,45,50)"],
						},
						shadows: {
							outLight: "5px 5px 5px #b6b6b6, -5px -5px 5px #ffffff",
							inLight: "inset 6px 6px 5px #d3d3d3, inset -6px -6px 5px #ffffff",
							bothLight:
								"5px 5px 5px #b6b6b6, -5px -5px 5px #ffffff, inset 6px 6px 5px #d3d3d3, inset -6px -6px 5px #ffffff",
							outDark: "5px 5px 6px #1c1f22, -5px -5px 6px #363b42",
							inDark: "inset 5px 5px 6px #1b1e22, inset -5px -5px 6px #373c43",
							bothDark:
								"5px 5px 6px #1c1f22, -5px -5px 6px #363b42, inset 5px 5px 6px #1b1e22, inset -5px -5px 6px #373c43",
						},
						globalStyles: (theme) => ({
							body: {
								backgroundColor:
									theme.colorScheme === "dark"
										? theme.colors.nmDark
										: theme.colors.nmLight,
							},
							".nmOutline": {
								border: "0.5rem solid",
								borderColor:
									theme.colorScheme === "dark"
										? theme.colors.nmDark
										: theme.colors.nmLight,
								boxShadow:
									theme.colorScheme === "dark"
										? theme.shadows.bothDark
										: theme.shadows.bothLight,
							},
							".nmFont": {
								backgroundColor:
									theme.colorScheme === "dark"
										? theme.colors.nmDark
										: theme.colors.nmLight,
								color:
									theme.colorScheme === "dark"
										? theme.colors.nmDark
										: theme.colors.nmLight,
								textShadow:
									theme.colorScheme === "dark"
										? "6px 6px 14px #1b1e22, -6px -6px 14px #373c43"
										: "6px 6px 5px #d3d3d3, -6px -6px 5px #ffffff",
							},
						}),
					}}
				>
					<Notifications position="top-center" />
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</MantineProvider>
			</ColorSchemeProvider>
			</QueryClientProvider>
		</>
	);
}
