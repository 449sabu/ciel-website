import Head from "next/head";
import { Text, Center, Stack } from "@mantine/core";

export default function Home() {
	return (
		<>
			<Head>
				<title>CIEL Stake Pool</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Center h="80vh">
					<Stack>
						<Text
							fz={{ base: "8rem", lg: "14rem",  }}
							fw="bold"
							ta="center"
							className={"fontNm"}
						>
							CIEL
						</Text>
						<Text fz={{ base: "3rem", lg: "6rem",  }} fw="bold" ta="center" className={"fontNm"}>
							Coming Soon
						</Text>
					</Stack>
				</Center>
			</main>
		</>
	);
}
