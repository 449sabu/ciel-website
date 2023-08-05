import { Box, useMantineColorScheme, createStyles } from "@mantine/core";

type BorderBox = Required<{
	readonly children: React.ReactElement | null;
}>;

const BorderBox = ({ children }: BorderBox) => {
	const { colorScheme } = useMantineColorScheme();
	const { classes, cx } = useStyles();
	const dark = colorScheme === "dark";

	return (
		<Box className={classes.outStyle}>
			<Box className={classes.inStyle}>{children}</Box>
		</Box>
	);
};

export default BorderBox;

const useStyles = createStyles((theme) => ({
	outStyle: {
		padding: "0.25rem",
		borderRadius: theme.radius.md,
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.nmDark : theme.colors.nmLight,
		boxShadow:
			theme.colorScheme === "dark"
				? "5px 5px 6px #1c1f22, -5px -5px 6px #363b42"
				: "5px 5px 5px #b6b6b6, -5px -5px 5px #ffffff",
	},
	inStyle: {
		padding: "0.5rem",
		borderRadius: theme.radius.md,
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.nmDark : theme.colors.nmLight,
		boxShadow:
			theme.colorScheme === "dark"
				? "inset 7px 7px 14px #1b1e22, inset -7px -7px 14px #373c43"
				: "inset 6px 6px 5px #d3d3d3, inset -6px -6px 5px #ffffff",
	},
}));
