import {
	useMantineColorScheme,
	SegmentedControl,
	Group,
	Center,
	Box,
	MediaQuery,
} from "@mantine/core";
import { Sun, Moon } from "tabler-icons-react";

const ColorSchemeToggle = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";

	return (
		<MediaQuery smallerThan="sm" styles={{ display: "none" }}>
		<Group position="center">
			<SegmentedControl
				color={dark ? "nmDark" : "nmLight"}
				radius="lg"
				sx={(theme) => ({
					borderRadius: theme.radius.lg,
					padding: "0",
					backgroundColor: dark ? "rgb(41,45,50)" : "#F0F0F0",
					boxShadow: dark
						? "6px 6px 14px #1b1e22, -6px -6px 14px #373c43"
						: "6px 6px 12px #dadada, -6px -6px 12px #ffffff",
				})}
				value={colorScheme}
				onChange={(value: "light" | "dark") => toggleColorScheme(value)}
				data={[
					{
						value: "light",
						label: (
							<Center
								sx={(theme) => ({
									padding: "0.5rem 1rem",
									borderRadius: theme.radius.lg,
									color: "teal",
									backgroundColor: dark ? "rgb(41,45,50)" : "#F0F0F0",
									boxShadow: dark
										? ""
										: "inset 6px 6px 5px #d3d3d3, inset -6px -6px 5px #ffffff",
								})}
							>
								<Sun size="1rem" />
								<Box ml={10}>Light</Box>
							</Center>
						),
					},
					{
						value: "dark",
						label: (
							<Center
								sx={(theme) => ({
									padding: "0.5rem 1rem",
									borderRadius: theme.radius.lg,
									color: "orange",
									backgroundColor: dark ? "rgb(41,45,50)" : "#F0F0F0",
									boxShadow: dark
										? "inset 7px 7px 14px #1b1e22, inset -7px -7px 14px #373c43"
										: "",
								})}
							>
								<Moon size="1rem" />
								<Box ml={10}>Dark</Box>
							</Center>
						),
					},
				]}
			/>
		</Group>
		</MediaQuery>
	);
};

export default ColorSchemeToggle;
