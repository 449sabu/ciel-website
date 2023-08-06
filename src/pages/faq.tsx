import {
	Center,
	Container,
	Title,
	Accordion,
	createStyles,
	rem,
} from "@mantine/core";

const data: {
	value: string;
	title: string;
	description: string;
}[] = [
	{
		value: "about-cardano",
		title: "Q. ステーキングとはなんですか？",
		description: "A. ステーキングとは、・・・",
	},
];

const Faq = () => {
	const { classes } = useStyles();

	return (
		<Center>
			<Container size="sm" className={classes.wrapper}>
				<Title align="center" className={classes.title}>
					Frequently Asked Questions
				</Title>

				<Accordion variant="separated">
					{data.map((element,index) => (
						<Accordion.Item className={classes.item} value={element.value} key={index}>
							<Accordion.Control>
								{element.title}
							</Accordion.Control>
							<Accordion.Panel>{element.description}</Accordion.Panel>
						</Accordion.Item>
					))}
				</Accordion>
			</Container>
		</Center>
	);
};

export default Faq;

const useStyles = createStyles((theme) => ({
	wrapper: {
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
		minHeight: 650,
	},

	title: {
		marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
	},

	item: {
		width: "40rem",
		borderRadius: theme.radius.md,
		marginBottom: theme.spacing.lg,
		border: `${rem(1)} solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},
}));
