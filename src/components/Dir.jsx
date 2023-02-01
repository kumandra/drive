import useIpfs from "@/hooks/useIpfs";
import React from "react";
import { TbFolder, TbTrash } from "react-icons/tb";

function Directory({ entry }) {
	const { cd, rm, cwd } = useIpfs();

	function handleCd() {
		cd([cwd, entry.name].join("/"));
	}

	async function handleDelete(e) {
		e.stopPropagation();
		const target = [cwd, entry.name].join("/");
		await rm(target);
	}

	return (
		<div
			onClick={handleCd}
			className="flex gap-2 p-4 transition-all cursor-pointer rounded-xl hover:bg-primary hover:bg-opacity-10 hover:text-primary place-items-center"
		>
			<img src="/icons8-folder-96.png" alt="" width={50} height={50} />
			<div className="flex-grow">
				<h3 className="text-sm text-base-context text-opacity-25">
					{entry.name}
				</h3>
				<h4 className="text-[0.65rem] text-base-context text-opacity-25 font-mono">
					{entry["cid"]["/"]}
				</h4>
			</div>
			<div>
				<button
					className="btn btn-circle btn-error btn-sm"
					onClick={handleDelete}
				>
					<TbTrash color="white" />
				</button>
			</div>
		</div>
	);
}

export default Directory;
