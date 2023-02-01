import { QuotaContext } from "@/contexts/quotaContext";
import { useContext } from "react";

export default function useQuota() {
	return useContext(QuotaContext);
}
