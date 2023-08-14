import { Button, Stack, createStyles } from "@mantine/core";
import { Home2, Help, MessageCircle, Book } from "tabler-icons-react";
import Link from "next/link";
import { useRouter } from "next/router";

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
		label: "Blogs",
		icon: Book,
		href: "/blog",
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

const Navigation = () => {
	const { classes, cx } = useStyles();
	const router = useRouter();

	return (
		<Stack align="center">
			{links.map((link, index) => (
				<Button
					component={Link}
					key={index}
					href={link.href}
					disabled={link.disabled}
					leftIcon={<link.icon />}
					className={cx(classes.buttonStyle, {
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
	buttonStyle: {
		width: "10rem",
		color: "gray",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		opacity: 0.85,
		borderRadius: theme.radius.md,
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.nmDark : theme.colors.nmLight,

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.nmDark
					: theme.colors.nmLight,
			boxShadow:
				theme.colorScheme === "dark"
					? theme.shadows.outDark
					: theme.shadows.outLight,
		},
	},

	active: {
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.nmDark : theme.colors.nmLight,
		color: theme.colorScheme === "dark" ? "orange" : "teal",
		boxShadow:
			theme.colorScheme === "dark"
				? theme.shadows.inDark
				: theme.shadows.inLight,

		"&:hover": {
			backgroundColor: theme.colorScheme === "dark" ? "nmDark" : "nmLight",
			color: theme.colorScheme === "dark" ? "orange" : "teal",
			boxShadow:
				theme.colorScheme === "dark"
					? theme.shadows.inDark
					: theme.shadows.inLight,
		},
	},
}));
