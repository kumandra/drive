import useWallet from "@/hooks/useWallet";
import { create } from "kubo-rpc-client";
import { createContext, useEffect, useState } from "react";

export const IpfsContext = createContext();

const IpfsProvider = ({ children }) => {
	const { wallet } = useWallet();
	const ipfs = create({
		url: "http://127.0.0.1:3000",
		headers: {
			address: wallet.address,
			authorization:
				"Bearer " +
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjJiOTY0ZTRmYWUxMjQyMTVmNmY1ZiIsImlhdCI6MTY3NDYxOTc5MiwiZXhwIjoxNjc1MjI0NTkyfQ.bLTB2UlBvD1oI1-35WFEF_p5aTVH5TCKx0KfhVeerLg",
		},
	});

	const [history, setHistory] = useState([`/${wallet.address}`]);
	const [cwd, setCwd] = useState(`/${wallet.address}`);
	const [files, setFiles] = useState([]);

	async function getAsyncItr(fn) {
		const promises = [];

		for await (const thing of fn) {
			promises.push(thing);
		}
		return promises;
	}

	async function fileList(path) {
		let data = await getAsyncItr(ipfs.files.ls(path));
		setFiles(JSON.parse(JSON.stringify(data)));
	}

	async function sizeOf(path) {
		let size = await ipfs.files.stat(path);
		setWetekaSize(size.cumulativeSize / 1000000);
	}

	function back() {
		if (history.length > 1) {
			console.log("history", history);
			let all = [...history];
			const toCd = all.pop();
			setHistory(all);
			setCwd(toCd);
		}
	}

	function cd(path) {
		if (path !== cwd) {
			setCwd((prevC) => {
				setHistory((prevH) => [...prevH, prevC]);
				return path;
			});
		}
	}

	function absoluteCd(path) {
		setCwd(path);
	}

	async function rm(path) {
		await ipfs.files.rm(path, {
			recursive: true,
		});
		await fileList(cwd);
	}

	useEffect(() => {
		fileList(cwd);
	}, [cwd]);

	return (
		<IpfsContext.Provider
			value={{
				ipfs,
				cd,
				absoluteCd,
				back,
				rm,
				cwd,
				files,
			}}
		>
			{children}
		</IpfsContext.Provider>
	);
};

export default IpfsProvider;
