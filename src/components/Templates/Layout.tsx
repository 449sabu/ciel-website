import { ReactElement, useState } from "react";
import {
	AppShell,
	Navbar,
	Header,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
	Group,
	useMantineColorScheme,
} from "@mantine/core";
import Navigation from "../Atoms/Navigation";
import ColorSchemeToggle from "../Atoms/ColorSchemeToggle";

type LayoutProps = Required<{
	readonly children: ReactElement | null;
}>;

const Layout = ({ children }: LayoutProps) => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	const dark = colorScheme === "dark";

	return (
		<AppShell
			// layout="alt"
			padding="md"
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={
				<Navbar
					p="md"
					hiddenBreakpoint="sm"
					hidden={!opened}
					width={{ sm: 200, lg: "14rem" }}
					bg={dark ? "rgb(41,45,50)" : "#F0F0F0"}
					style={{
						border: "none",
						// justifyContent: "center",
					}}
				>
					<Navbar.Section>
						<Navigation />
					</Navbar.Section>
				</Navbar>
			}
			header={
				<Header
					height={{ base: 50, md: 100 }}
					px="xl"
					bg={dark ? "rgb(41,45,50)" : "#F0F0F0"}
					style={{
						border: "none",
					}}
				>
					<MediaQuery largerThan="sm" styles={{ display: "none" }}>
						<Burger
							opened={opened}
							onClick={() => setOpened((o) => !o)}
							size="sm"
							color={theme.colors.gray[6]}
							mr="xl"
						/>
					</MediaQuery>
					<Group position="apart" h={"100%"}>
						<MediaQuery smallerThan="md" styles={{ display: "none" }}>
							<Text>CIEL Official website</Text>
						</MediaQuery>
						<ColorSchemeToggle />
					</Group>
				</Header>
			}
		>
			{children}
		</AppShell>
	);
};

export default Layout;
