import { ReactElement, useState } from "react";
import {
	AppShell,
	Navbar,
	Header,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
} from "@mantine/core";
import Navigation from "./Navigation";

type LayoutProps = Required<{
	readonly children: ReactElement | null;
}>;

const Layout = ({ children }: LayoutProps) => {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);

	return (
		<AppShell
			// layout="alt"
			bg="#F0F0F0"
			padding="md"
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={
				<Navbar
					p="md"
					hiddenBreakpoint="sm"
					hidden={!opened}
					width={{ sm: 200, lg: 300 }}
					style={{
            backgroundColor: "#F0F0F0",
						border: "none",
					}}
				>
					<Navbar.Section>
						<Navigation />
					</Navbar.Section>
				</Navbar>
			}
			header={
				// <MediaQuery largerThan="sm" styles={{ display: "none" }}>
				<Header
					height={{ base: 50, md: 70 }}
					p="md"
					style={{
            // backgroundColor: "#F0F0F0",
            backgroundColor: "green",
						border: "none",
					}}
				>
					<div
						style={{ display: "flex", alignItems: "center", height: "100%" }}
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
						<Text>CIEL Official website</Text>
					</div>
				</Header>
				// </MediaQuery>
			}
		>
			{children}
		</AppShell>
	);
};

export default Layout;
