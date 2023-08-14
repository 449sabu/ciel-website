import { Button, createStyles } from "@mantine/core";
import Link from "next/link";

const StakingButton = () => {
	const { classes, cx } = useStyles();

	return (
		<Button
			className={cx(classes.stakeButton)}
			component={Link}
			href="/staking"
			radius="md"
		>
			Staking
		</Button>
	);
};

export default StakingButton;

const useStyles = createStyles((theme) => ({
	stakeButton: {
		margin: "1rem",
		color: theme.colorScheme === "dark" ? "orange" : "teal",
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.nmDark : theme.colors.nmLight,
		boxShadow:
			theme.colorScheme === "dark"
				? theme.shadows.outDark
				: theme.shadows.outLight,

		"&:hover": {
			backgroundImage:
				theme.colorScheme === "dark"
					? theme.fn.gradient({ from: "red", to: "orange", deg: 90 })
					: theme.fn.gradient(),
			color:
				theme.colorScheme === "dark"
					? theme.colors.nmDark
					: theme.colors.nmLight,
		},
	},
}));
