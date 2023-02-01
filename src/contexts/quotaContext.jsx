import React, { createContext } from "react";
import { ethers } from "ethers";
import useEnv from "@/hooks/useEnv";
import { abi } from "@/assets/Quota.json";

export const QuotaContext = createContext();

export default function QuotaProvider({ children }) {
	const ADDRESS = useEnv("VITE_ADDRESS");
	const RPC = useEnv("VITE_RPC");
	const network = new ethers.providers.JsonRpcProvider(RPC);
	const contract = new ethers.Contract(ADDRESS, abi, network);

	return (
		<QuotaContext.Provider value={contract}>{children}</QuotaContext.Provider>
	);
}
