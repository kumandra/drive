import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import useIpfs from "./hooks/useIpfs";
import Files from "./pages/Files";
import Plans from "./pages/Plans";

function App() {
	const ipfs = useIpfs();

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="files" element={<Files />} />
				<Route path="plans" element={<Plans />} />
			</Route>
		</Routes>
	);
}

export default App;
