import useWallet from "@/hooks/useWallet";
import React, { useState } from "react";

export default function OpenWallet() {
	const { openWallet, walletErrors } = useWallet();
	const [password, setPassword] = useState("");

	function handleOpenWallet() {
		openWallet(password);
	}

	function handleChange(e) {
		setPassword(e.target.value);
	}
	return (
		<div className="fixed top-0 drawer drawer-end">
			<input
				id="my-drawer-4"
				type="checkbox"
				className="drawer-toggle hidden"
				checked={true}
				readOnly={true}
			/>
			<div className="drawer-side">
				<label htmlFor="my-drawer-4" className="drawer-overlay"></label>
				<div className="w-96 bg-base-100 p-4 flex flex-col gap-4">
					<input
						type="password"
						name="password"
						className="input input-bordered w-full"
						value={password}
						onChange={handleChange}
					/>
					<button
						className="btn btn-primary btn-block"
						onClick={handleOpenWallet}
					>
						Open Wallet
					</button>
					<pre>{JSON.stringify(walletErrors, null, 4)}</pre>
				</div>
			</div>
		</div>
	);
}
