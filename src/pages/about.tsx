import {
	Container,
	Text,
	BackgroundImage,
	Flex,
	Card,
	SimpleGrid,
} from "@mantine/core";
import { HeartHandshake, Icon } from "tabler-icons-react";

const About = () => {
	return (
		<Container>
			<Flex justify="center" align="center">
				<Text
					maw={{ base: "12rem", md: "18rem", lg: "26rem" }}
					pr={{ base: "2rem", lg: "3rem" }}
					fz={{ base: "sm", md: "md" }}
				>
					CIEL Stake Pool は 2020年9月に設立された、日本発の Cardano Staking
					Pool です。 持続可能な Cardano エコシステムに貢献しています。
				</Text>
				<BackgroundImage
					src="./img/about.png"
					h={{ base: "8rem", md: "14rem", lg: "18rem" }}
					w={{ base: "8rem", md: "14rem", lg: "18rem" }}
					sx={(theme) => ({
						borderRadius: theme.radius.xl,
						border: "0.5rem solid",
						borderColor:
							theme.colorScheme === "dark"
								? theme.colors.nmDark
								: theme.colors.nmLight,
						boxShadow:
							theme.colorScheme === "dark"
								? theme.shadows.outDark
								: theme.shadows.outLight,
					})}
				/>
			</Flex>
			<SimpleGrid
				cols={3}
				spacing="xl"
				mt={50}
				breakpoints={[{ maxWidth: "md", cols: 1 }]}
			>
				{features.map((element, index) => (
					<FeatureCard
						key={index}
						title={element.title}
						description={element.description}
						icon={element.icon}
					/>
				))}
			</SimpleGrid>
		</Container>
	);
};

export default About;

interface FeatureCardProps {
	title: string;
	description: string;
	icon: Icon
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
	return (
		<Card
			radius="md"
			padding="md"
			sx={(theme) => ({
				backgroundColor:
					theme.colorScheme === "dark"
						? theme.colors.nmDark
						: theme.colors.nmLight,
				boxShadow:
					theme.colorScheme === "dark"
						? theme.shadows.outDark
						: theme.shadows.outLight,
			})}
		>
			{/* <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} /> */}
			<Text
				sx={(theme) => ({
					color: theme.colorScheme === "dark" ? "orange" : "teal",
				})}
			>
				<HeartHandshake size={"3rem"} />
			</Text>
			<Text fz="lg" fw={500} mt="md">
				{title}
			</Text>
			<Text fz="sm" c="dimmed" mt="sm">
				{description}
			</Text>
		</Card>
	);
};

const features = [
	{
		title: "ローカルノード",
		description: "頑張って勉強して、プログラミングをしています。",
		icon: HeartHandshake,
	},
	{
		title: "ローカルノード",
		description: "頑張って勉強して、プログラミングをしています。",
		icon: HeartHandshake,
	},
	{
		title: "ローカルノード",
		description: "頑張って勉強して、プログラミングをしています。",
		icon: HeartHandshake,
	},
];
