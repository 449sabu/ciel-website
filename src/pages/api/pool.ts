// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { BlockFrostAPI } from "@blockfrost/blockfrost-js";
import type { ExMetadata } from "@/types";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const Blockfrost = new BlockFrostAPI({
		projectId: process.env.NEXT_PUBLIC_BLOCKFROST_MAINNET_API_KEY || "",
	});

	const POOL_METADATA = await Blockfrost.poolMetadata(
		req.body.id
	);
	const POOL_INFO = await Blockfrost.poolsById(req.body.id);

	if (POOL_METADATA.url) {
		try {
			const metadata = await fetch(POOL_METADATA.url)
				.then((res) => res.json())
				.then((data) => {
					return data;
				});
			const exMetadata: ExMetadata = await fetch(metadata.extended)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					return data;
				});

			res.status(200).json({
				pool_id: POOL_METADATA.pool_id,
				hex: POOL_METADATA.hex,
				ticker: POOL_METADATA.ticker,
				name: POOL_METADATA.name,
				homepage: POOL_METADATA.homepage,
				live_stake: POOL_INFO.live_stake,
				active_stake: POOL_INFO.active_stake,
				fixed_cost: POOL_INFO.fixed_cost,
				margin: POOL_INFO.margin_cost,
				logo: exMetadata.info.url_png_icon_64x64 ? exMetadata.info.url_png_icon_64x64 : null
			});
		} catch {
			res.status(200).json({
				pool_id: POOL_METADATA.pool_id,
				hex: POOL_METADATA.hex,
				ticker: POOL_METADATA.ticker,
				name: POOL_METADATA.name,
				homepage: POOL_METADATA.homepage,
				live_stake: POOL_INFO.live_stake,
				active_stake: POOL_INFO.active_stake,
				fixed_cost: POOL_INFO.fixed_cost,
				margin: POOL_INFO.margin_cost,
				logo: null
			});
		}
	} else {
		res.status(200).json({
			pool_id: POOL_METADATA.pool_id,
			hex: POOL_METADATA.hex,
			ticker: POOL_METADATA.ticker,
			name: POOL_METADATA.name,
			homepage: POOL_METADATA.homepage,
			live_stake: POOL_INFO.live_stake,
			active_stake: POOL_INFO.active_stake,
			fixed_cost: POOL_INFO.fixed_cost,
			margin: POOL_INFO.margin_cost,
			logo: null
		});
	}
};
