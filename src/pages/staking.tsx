import { Container, Text, Box, Timeline, Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import ConnectWallet from "@/components/Atoms/ConnectWallet";
import DelegationSteps from "@/components/Organisms/DelegationSteps";
import { useStore } from "@/libs/zustand/store";
import { fetchDelegationPool, fetchKoiosPoolInfo } from "@/libs/fetch";

const Staking = () => {
	const pool_id = process.env.NEXT_PUBLIC_POOL_ID || "";
	const setMyPool = useStore((state) => state.setMyPool);
	const connecting = useStore((state) => state.connecting);

	const { data } = useQuery({
		queryKey: ["thisPool", pool_id],
		queryFn: ({ queryKey }) => fetchKoiosPoolInfo(queryKey[1]),
	});

	useEffect(() => {
		const myPoolInformation = async () => {
			const data = await fetchDelegationPool(pool_id);
			setMyPool(data);
		};
		myPoolInformation();
	}, []);

	// ウォレットが接続されるたびに検証
	useEffect(() => {
		console.log(connecting);
		if (connecting.delegation === pool_id) {
			notifications.show({
				title: "Sucsess",
				message: "このアドレスは、既に CIEL に委任しています。🙌",
				color: "green",
			});
		} else {
		}
	}, [connecting]);

	return (
		<Container>
			<Text>CIEL Staking Station へようこそ！</Text>
			<Text>
				お持ちのウォレットの「dApp
				Connector」機能を利用して、安全に直接委任することができます。
			</Text>

			<Text>
				Staking
				Stationは、コミュニティツールの「Lucid」と「Koios」を使用し、構築しています。
			</Text>
			<Box
				my="1rem"
				sx={(theme) => ({
					boxShadow:
						theme.colorScheme === "dark"
							? theme.shadows.outDark
							: theme.shadows.outLight,
					padding: "2rem 4rem",
					borderRadius: theme.radius.md,
					maxWidth: "50rem",
				})}
			>
				<Timeline active={0}>
					<Timeline.Item title="ウォレットを接続する。" bulletSize={24}>
						<ConnectWallet />
					</Timeline.Item>
					<Timeline.Item title="委任する。" bulletSize={24}>
						<DelegationSteps />
						<Button onClick={() => console.log(JSON.stringify(data, null, 2))}>
							console
						</Button>
					</Timeline.Item>
				</Timeline>
			</Box>
		</Container>
	);
};

export default Staking;
