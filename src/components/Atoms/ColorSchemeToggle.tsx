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
					sx={(theme) => ({
						borderRadius: theme.radius.lg,
						padding: "0",
						backgroundColor:
							theme.colorScheme === "dark"
								? theme.colors.nmDark
								: theme.colors.nmLight,
						boxShadow:
							theme.colorScheme === "dark"
								? theme.shadows.outDark
								: theme.shadows.outLight,
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
										backgroundColor:
											theme.colorScheme === "dark"
												? theme.colors.nmDark
												: theme.colors.nmLight,
										boxShadow:
											theme.colorScheme === "dark" ? "" : theme.shadows.inLight,
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
										backgroundColor:
											theme.colorScheme === "dark"
												? theme.colors.nmDark
												: theme.colors.nmLight,
										boxShadow:
											theme.colorScheme === "dark" ? theme.shadows.inDark : "",
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
