import { ReactElement, useState } from "react";
import {
	AppShell,
	Navbar,
	Header,
	MediaQuery,
	Burger,
	useMantineTheme,
	Group,
	useMantineColorScheme,
} from "@mantine/core";
import Navigation from "../Molecules/Navigation";
import ColorSchemeToggle from "../Atoms/ColorSchemeToggle";
import StakingButton from "@/components/Atoms/StakingButton";

type LayoutProps = Required<{
	readonly children: ReactElement | null;
}>;

const Layout = ({ children }: LayoutProps) => {
	const { colorScheme } = useMantineColorScheme();
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
					}}
				>
					<Navbar.Section>
						<Navigation />
					</Navbar.Section>
				</Navbar>
			}
			header={
				<Header
					height={{ base: 60, md: 100 }}
					px="xl"
					bg={dark ? "rgb(41,45,50)" : "#F0F0F0"}
					style={{
						border: "none",
					}}
				>
					<MediaQuery largerThan="sm" styles={{ display: "none" }}>
						<Group position="right" h={"100%"}>
							<Burger
								opened={opened}
								onClick={() => setOpened((o) => !o)}
								size="md"
								color={theme.colors.gray[6]}
								sx={(theme) => ({
									marginTop: "1rem",
									backgroundColor:
										theme.colorScheme === "dark"
											? theme.colors.nmDark
											: theme.colors.nmLight,
									boxShadow:
										theme.colorScheme === "dark"
											? "5px 5px 6px #1c1f22, -5px -5px 6px #363b42"
											: "5px 5px 5px #b6b6b6, -5px -5px 5px #ffffff",
								})}
							/>
						</Group>
					</MediaQuery>
					<Group position="right" h={"100%"}>
						<StakingButton />
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
