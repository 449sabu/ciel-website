import { Lucid, Cardano, Blockfrost, Delegation } from "lucid-cardano";

export type Wallets =
	| "nami"
	| "flint"
	| "eternl"
	| "lace"
	| "gerowallet"
	| "cardwallet";

export const connect = async (wallet: Cardano[Wallets]) => {
	const lucid = await Lucid.new(
		new Blockfrost(
			"https://cardano-mainnet.blockfrost.io/api/v0",
			process.env.NEXT_PUBLIC_BLOCKFROST_MAINNET_API_KEY
		),
		"Mainnet"
	);

	try {
		const connect = await wallet.enable();
		lucid.selectWallet(connect);
		const delegation = await lucid.wallet.getDelegation();
		const isEnabled = await wallet.isEnabled();

		return {
			name:
				wallet.name === "Nami"
					? "nami"
					: wallet.name === "eternl"
					? "eternl"
					: wallet.name === "Flint Wallet"
					? "flint"
					: wallet.name === "lace"
					? "lace"
					: wallet.name === "GeroWallet"
					? "gerowallet"
					: "cardwallet",
			isEnabled: isEnabled,
			delegation: delegation.poolId,
		};
	} catch (error) {
		return {
			name: "ウォレット接続がキャンセルされました。",
			isEnabled: false,
			delegation: null,
		};
	}
};

export const toDelegation = async (wallet: string, pool_id: string) => {
	const lucid = await Lucid.new(
		new Blockfrost(
			"https://cardano-mainnet.blockfrost.io/api/v0",
			process.env.NEXT_PUBLIC_BLOCKFROST_MAINNET_API_KEY
		),
		"Mainnet"
	);

	const connect = await window.cardano[wallet].enable();
	lucid.selectWallet(connect);

	const rewardAddress = await lucid.wallet.rewardAddress();
	const delegation = await lucid.wallet.getDelegation();

	if (rewardAddress && delegation.poolId) {
		const tx = await lucid
			.newTx()
			.delegateTo(rewardAddress, pool_id)
			.complete();
		const signedTx = await tx.sign().complete();
		const txHash = await signedTx.submit();
		return txHash;
	}
};

export const toRegister = async (wallet: string, pool_id: string) => {
	const lucid = await Lucid.new(
		new Blockfrost(
			"https://cardano-mainnet.blockfrost.io/api/v0",
			process.env.NEXT_PUBLIC_BLOCKFROST_MAINNET_API_KEY
		),
		"Mainnet"
	);

	const connect = await window.cardano[wallet].enable();
	lucid.selectWallet(connect);

	const rewardAddress = await lucid.wallet.rewardAddress();
	// const delegation = await lucid.wallet.getDelegation();

	console.log(rewardAddress)
	// console.log(delegation)

	if (rewardAddress) {
		const tx = await lucid.newTx()
		.registerStake(rewardAddress)
		.complete();
	
	const signedTx = await tx.sign().complete();
	
	await signedTx.submit();
	}
};