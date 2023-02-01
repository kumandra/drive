import { WalletContext } from "@/contexts/walletContext";
import { useContext } from "react";

export default function useWallet() {
	return useContext(WalletContext);
}
