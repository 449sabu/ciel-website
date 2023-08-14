import { Text, Group, Select, Avatar } from "@mantine/core";
import { forwardRef } from "react";
import { useBrowserWallet } from "@/hooks/useBrowserWallet";
import { useStore } from "@/libs/zustand/store";
import { connect } from "@/libs/lucid";
import { fetchDelegationPool } from "@/libs/fetch";

const ConnectWallet = () => {
	const setConnecting = useStore((state) => state.setConnecting);
	const setCurrentPool = useStore((state) => state.setCurrentPool);
	const { wallets } = useBrowserWallet();
	const itemList = wallets.map((e) => {
		return {
			value:
				e.name === "Nami"
					? "nami"
					: e.name === "eternl"
					? "eternl"
					: e.name === "Flint Wallet"
					? "flint"
					: e.name === "lace"
					? "lace"
					: e.name === "GeroWallet"
					? "gerowallet"
					: "cardwallet",
			label: e.name,
			image: e.icon,
			name: e.name,
		};
	});

	return (
		<Select
			w={{ lg: "12rem" }}
			my={"1rem"}
			placeholder="Pick one"
			itemComponent={SelectItem}
			data={itemList}
			onChange={async (e) => {
				if (e) {
					const wallet = window.cardano[e];
					const walletInfo = await connect(wallet);
					setConnecting(walletInfo);

					if (walletInfo.delegation) {
						const data = await fetchDelegationPool(walletInfo.delegation);
						setCurrentPool(data);
					}
				}
			}}
		/>
	);
};

export default ConnectWallet;

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
	image: string;
	label: string;
	description: string;
}

// https://react.dev/reference/react/forwardRef
const SelectItem = forwardRef<HTMLDivElement, ItemProps>(function SelectItem(
	{ image, label, description, ...others }: ItemProps,
	ref
) {
	return (
		<div ref={ref} {...others}>
			<Group noWrap>
				<Avatar src={image} size="sm"/>

				<div>
					<Text size="sm">{label}</Text>
					<Text size="xs" opacity={0.65}>
						{description}
					</Text>
				</div>
			</Group>
		</div>
	);
});
