import type { AppProps } from "next/app";
import Head from "next/head";
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import Layout from "@/components/Templates/Layout";

export default function App(props: AppProps) {
	const { Component, pageProps } = props;

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
							"nmLight": ["#F0F0F0"],
							"nmDark": ["rgb(41,45,50)"],
						},
						// primaryShade: { light: 6, dark: 8 },
						globalStyles: (theme) => ({
							body: {
								backgroundColor:
									theme.colorScheme === "dark" ? "rgb(41,45,50)" : "#F0F0F0",
							},
							".fontNm": {
								backgroundColor:
									theme.colorScheme === "dark" ? "rgb(41,45,50)" : "#F0F0F0",
								color:
									theme.colorScheme === "dark" ? "rgb(41,45,50)" : "#F0F0F0",
								textShadow:
									theme.colorScheme === "dark"
										? "6px 6px 14px #1b1e22, -6px -6px 14px #373c43"
										: "6px 6px 5px #d3d3d3, -6px -6px 5px #ffffff",
										// : "6px 6px 12px #dadada, -6px -6px 12px #ffffff",
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
