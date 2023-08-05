import {
	useMantineColorScheme,
	Button,
	Stack,
	createStyles,
} from "@mantine/core";
import { Home2, Help, MessageCircle } from "tabler-icons-react";
import Link from "next/link";
import { useRouter } from "next/router";

// interface NavbarLinkProps {
// 	icon: React.FC<any>;
// 	label: string;
// 	active?: boolean;
// 	onClick?(): void;
// }

const Navigation = () => {
	const { classes, cx } = useStyles();
	const router = useRouter();
	const { colorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";

	return (
		<Stack align="center">
			{links.map((link, index) => (
				<Button
					component={Link}
					key={index}
					href={link.href}
					disabled={link.disabled}
					leftIcon={<link.icon />}
					className={cx(
						dark ? classes.dark :  classes.light , {
						[classes.active]: router.route === link.href,
					})}
				>
					{link.label}
				</Button>
			))}
		</Stack>
	);
};

export default Navigation;

const useStyles = createStyles((theme) => ({
	light: {
		borderRadius: theme.radius.md,
		backgroundColor: "#F0F0F0",
		width: "10rem",
		color: "gray",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		opacity: 0.85,

		"&:hover": {
			backgroundColor: theme.colors.nmLight,
			boxShadow: "5px 5px 5px #b6b6b6, -5px -5px 5px #ffffff"
		},
	},

	dark: {
		borderRadius: theme.radius.md,
		backgroundColor: theme.colors.nmDark,
		width: "10rem",
		color: "gray",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		opacity: 0.85,

		"&:hover": {
			backgroundColor: theme.colors.nmDark,
			boxShadow: "5px 5px 6px #1c1f22, -5px -5px 6px #363b42"
		},
	},

	active: {
		backgroundColor: theme.colorScheme === "dark" ? "nmDark" : "nmLight",
		color: theme.colorScheme === "dark" ? "orange" : "teal",
		boxShadow:
			theme.colorScheme === "dark"
				? "inset 5px 5px 6px #1b1e22, inset -5px -5px 6px #373c43"
				: "inset 6px 6px 5px #d3d3d3, inset -6px -6px 5px #ffffff",

		"&:hover": {
			backgroundColor: theme.colorScheme === "dark" ? "nmDark" : "nmLight",
			color: theme.colorScheme === "dark" ? "orange" : "teal",
			boxShadow:
				theme.colorScheme === "dark"
					? "inset 5px 5px 6px #1b1e22, inset -5px -5px 6px #373c43"
					: "inset 6px 6px 5px #d3d3d3, inset -6px -6px 5px #ffffff",
		},
	},
}));

const links = [
	{
		label: "Home",
		icon: Home2,
		href: "/",
		disabled: false,
	},
	{
		label: "About",
		icon: Home2,
		href: "/about",
		disabled: false,
	},
	{
		label: "FAQ",
		icon: Help,
		href: "/faq",
		disabled: false,
	},
	{
		label: "Contact",
		icon: MessageCircle,
		href: "/contact",
		disabled: false,
	},
];
