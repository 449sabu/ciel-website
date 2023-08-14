// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const fetchKoiosPoolInfo = async () => {
		const res = await axios.post("https://api.koios.rest/api/v0/pool_info", {
			_pool_bech32_ids: [req.body.id],
		});
		return res.data;
	};

	const POOL_INFO = await fetchKoiosPoolInfo();

	res.status(200).json({
		POOL_INFO,
	});
}
