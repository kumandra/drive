import useWallet from "@/hooks/useWallet";
import React from "react";
import { Outlet } from "react-router-dom";
import CreateWallet from "./CreateWallet";
import LeftSidebar from "./LeftSidebar";
import OpenWallet from "./OpenWallet";

export default function Layout() {
	const { walletStatus } = useWallet();

	return (
		<div className="relate">
			<div className="h-screen flex overflow-hidden">
				<div className="h-screen">
					<LeftSidebar />
				</div>
				<div className="flex-grow overflow-x-hidden overflow-y-auto">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
