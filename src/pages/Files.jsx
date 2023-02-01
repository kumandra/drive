import Breadcrum from "@/components/Breadcrum";
import Entry from "@/components/Entry";
import useIpfs from "@/hooks/useIpfs";
import useQuota from "@/hooks/useQuota";
import React, { useEffect } from "react";

export default function Files() {
	const { files } = useIpfs();
	const contract = useQuota();

	async function getBalance() {
		let balance = await contract.getBalance();
		console.log(balance);
	}

	useEffect(() => {
		getBalance();
	}, []);

	return (
		<div className="flex flex-col">
			<div className="flex place-items-center border-b border-b-base-300">
				<Breadcrum />
			</div>

			<div className="flex flex-col gap-2 place-content-center p-4">
				{files.map((entry, i) => {
					return <Entry key={i} entry={entry} />;
				})}
			</div>
		</div>
	);
}
