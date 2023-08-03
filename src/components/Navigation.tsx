import { Button, UnstyledButton, Stack, createStyles } from "@mantine/core";
import { Home2, Help, MessageCircle, ChevronRight } from "tabler-icons-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

interface NavbarLinkProps {
	icon: React.FC<any>;
	label: string;
	active?: boolean;
	onClick?(): void;
}

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
		disabled: true,
	},
	{
		label: "Contact",
		icon: MessageCircle,
		href: "/contact",
		disabled: true,
	},
];

const Navigation = () => {
	const { classes, cx } = useStyles();
	const [active, setActive] = useState(1);
	const router = useRouter();
	console.log(router.route);

	return (
		<Stack>
			{links.map((link, index) => (
				<Button
					component={Link}
					key={link.label}
					href={link.href}
					disabled={link.disabled}
          leftIcon={<link.icon />}
					// active={router.route === link.href}
					// variant="subtle"
					// className={cx(classes.link)}
					onClick={() => setActive(index)}
					className={cx(classes.link, { [classes.active]: active === index })}
				>
					{link.label}
				</Button>
			))}
		</Stack>
	);
};

export default Navigation;

const useStyles = createStyles((theme) => ({
	link: {
		borderRadius: theme.radius.md,
		backgroundColor: "#F0F0F0",
		color: "gray",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		opacity: 0.85,

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[5]
					: theme.colors.gray[0],
		},
	},

	active: {
		backgroundColor: theme.colorScheme === "dark" ? "rgb(43,47,55)" : "#F0F0F0",
		boxShadow: "6px 6px 12px #dadada, -6px -6px 12px #ffffff",
		color: "orange",

		// "&, &:hover": {
		// 	backgroundColor: theme.fn.variant({
		// 		variant: "light",
		// 		color: theme.primaryColor,
		// 	}).background,
		// color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
		// },
	},
}));
