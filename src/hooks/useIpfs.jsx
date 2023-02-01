import { IpfsContext } from "@/contexts/ipfsContext";
import { useContext } from "react";

export default function useIpfs() {
	return useContext(IpfsContext);
}
