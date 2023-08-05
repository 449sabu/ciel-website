import { createStyles, Card, Image, Avatar, Text, Group } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	card: {
		// backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.nmDark : theme.colors.nmLight,
		boxShadow:
			theme.colorScheme === "dark"
				? theme.shadows.outDark
				: theme.shadows.outLight,
	},

	title: {
		fontWeight: 700,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1.2,
	},

	body: {
		padding: theme.spacing.md,
	},
}));

interface ArticleCardVerticalProps {
	image: string;
	category: string;
	title: string;
	date: string;
	link: string;
	author: {
		name: string;
		image: string;
	};
}

const BlogCardMobile = ({
	image,
	category,
	title,
	date,
	author,
	link,
}: ArticleCardVerticalProps) => {
	const { classes } = useStyles();
	return (
		<Card withBorder radius="md" p={0} className={classes.card}>
			<Group noWrap spacing={0}>
				<Image src={image} height={140} width={140} />
				<div className={classes.body}>
					<Text className={classes.title} mb="md">
						{title}
					</Text>
					{/* <Text transform="uppercase" color="dimmed" weight={700} size="xs">
            {category}
          </Text> */}
					<Group noWrap spacing="xs">
						<Group spacing="xs" noWrap>
							<Avatar size={20} src={author.image} />
							<Text size="xs">{author.name}</Text>
						</Group>
						<Text size="xs" color="dimmed">
							•
						</Text>
						<Text size="xs" color="dimmed">
							{date}
						</Text>
					</Group>
				</div>
			</Group>
		</Card>
	);
};

export default BlogCardMobile;
