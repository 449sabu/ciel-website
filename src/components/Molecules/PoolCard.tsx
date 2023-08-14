import { Avatar, Card, Group, Progress, Text, Skeleton } from "@mantine/core";

const PoolCard = ({ pool }: any) => {
	if (pool) {
		return (
			<Card withBorder padding="lg" radius="md" h={"12rem"} w={"18rem"}>
				<Group position="left" h={"3rem"}>
					{pool.logo ? (
						<Avatar src={pool.logo} radius="xl" size="md" />
					) : (
						<Avatar color="blue.8" radius="xl" size="md" />
					)}
					<Text fz="lg" fw={500}>
						{pool.name}
					</Text>
				</Group>

				<Text fz="sm" c="dimmed" mt={5}>
					Ticker: {pool.ticker}
				</Text>
				<Text fz="sm" c="dimmed">
					Cost: 340 ₳ + {pool.margin} %
				</Text>

				<Text c="dimmed" fz="sm" mt="md">
					飽和率
				</Text>

				<Progress value={(23 / 36) * 100} mt={5} />
			</Card>
		);
	}

	return (
		<Card withBorder padding="lg" radius="md" h={"12rem"} w={"18rem"}>
			<Group position="left" h={"3rem"}>
				<Skeleton height={38} circle mb="xl" />
			</Group>
			<Skeleton height={12} radius="xl" />
			<Skeleton height={12} radius="xl" mt="1rem" />
			<Text c="dimmed" fz="sm" mt="md">
				Saturation
			</Text>
			<Skeleton height={12} radius="xl" />
		</Card>
	);
};

export default PoolCard;
