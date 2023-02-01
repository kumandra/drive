import useIpfs from "@/hooks/useIpfs";
import useWallet from "@/hooks/useWallet";
import React from "react";
import { TbArrowLeft, TbFolder } from "react-icons/tb";

export default function Breadcrum() {
	const { wallet } = useWallet();
	const { cwd, cd: CD, back } = useIpfs();

	const hidden = (input) => {
		if (input === "") {
			return true;
		}
		return false;
	};

	return (
		<div className="flex-grow">
			<ul className="flex">
				<li
					onClick={back}
					className="flex gap-1 cursor-pointer hover:bg-base-300 py-2 px-4 border-r border-r-base-300"
				>
					<TbArrowLeft size={24} />
				</li>
				{cwd &&
					cwd.split("/").map((cd, index) => {
						let toGo = cwd ? cwd.split("/") : [];
						let path = toGo.slice(0, index + 1);
						let pathString = path.join("/");
						return (
							<li
								key={cd}
								onClick={() => {
									CD(path.join("/"));
								}}
								className={
									hidden(pathString)
										? "hidden"
										: "flex place-items-center gap-1 cursor-pointer hover:bg-base-300 py-2 px-4 border-r border-r-base-300 text-xs font-mono"
								}
							>
								<img
									src="/icons8-opened-folder-96.png"
									alt=""
									width={18}
									height={18}
								/>{" "}
								{cd === wallet?.address ? "HOME" : cd}
							</li>
						);
					})}
			</ul>
		</div>
	);
}
