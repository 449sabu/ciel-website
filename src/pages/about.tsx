import Image from "next/image";
import {
	Box,
	Center,
	Container,
	Group,
	Text,
	createStyles,
} from "@mantine/core";

interface AboutProps {
	title: string;
	description: string;
}

const data = {
	title: "",
	description:
		"CIEL Stake Pool は 2020年9月に設立された、日本発の Cardano Staking Pool です。持続可能な Cardano エコシステムに貢献しています。",
};

const About = () => {
	return (
		<Container>
			<Center>
				<Text className="fontNm" fz="6rem" fw="bold">
					About
				</Text>

				<Group>
					<Text>{data.title}</Text>
					<Text w={{ lg: "23rem" }} pr={{ lg: "3rem" }}>
						{data.description}
					</Text>
				</Group>
			</Center>{" "}
      {/* test */}
			<Box className="nmOutline" sx={(theme) => ({
        margin: "3rem",
        padding: "2rem",
        borderRadius: theme.radius.xl
      })}>
				<Text>Test</Text>
			</Box>
		</Container>
	);
};

export default About;
