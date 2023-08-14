import { Button, Box, Flex, Stack } from "@mantine/core";
import { CaretRight } from 'tabler-icons-react';
import { useStore } from "@/libs/zustand/store";
import PoolCard from "@/components/Molecules/PoolCard";
import { toDelegation } from "@/libs/lucid";

const DelegationSteps = () => {
	const pool_id = process.env.NEXT_PUBLIC_POOL_ID || "";
	const connecting = useStore((state) => state.connecting);
	const currentPool = useStore((state) => state.currentPool);
	const myPool = useStore((state) => state.myPool);

	return (
		<>
			<Flex>
				<PoolCard pool={currentPool} />
				<Stack w={"4rem"} align="center" justify="center">
					<CaretRight strokeWidth={1}/>
					<CaretRight strokeWidth={1}/>
					<CaretRight strokeWidth={1}/>
				</Stack>
				<PoolCard pool={myPool} />
			</Flex>
			<Button onClick={() => toDelegation(connecting.name, pool_id)}>
				委任する
			</Button>
		</>
	);
};

export default DelegationSteps;
