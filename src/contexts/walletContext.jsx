import CreateWallet from "@/components/CreateWallet";
import OpenWallet from "@/components/OpenWallet";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ethers } from "ethers";
import React, { createContext, useEffect, useState } from "react";

export const WalletContext = createContext();

export default function WalletProvider({ children }) {
	const [encrypedWallets, setEncrypedWallets] = useLocalStorage(
		"encrypted",
		null,
	);

	const [wallet, setWallet] = useState(null);
	const [walletErrors, setWalletErrors] = useState(null);
	const [walletStatus, setWalletStatus] = useState();

	async function createWallet(password) {
		const newWallet = ethers.Wallet.createRandom();

		const json = await newWallet.encrypt(password, {
			scrypt: {
				N: 64,
			},
		});
		setEncrypedWallets(json);
		setWallet(newWallet);
		setWalletStatus(null);
	}

	function importMnemonic(mnemonic, password) {
		const newWallet = ethers.Wallet.fromMnemonic(mnemonic);
		const json = newWallet.encrypt(password, {
			scrypt: {
				N: 64,
			},
		});
		setEncrypedWallets(json);
		setWallet(newWallet);
		setWalletStatus();
	}

	function importPrivateKey(privateKey, password) {
		const newWallet = new ethers.Wallet(privateKey);
		const json = newWallet.encrypt(password, {
			scrypt: {
				N: 64,
			},
		});
		setEncrypedWallets(json);
		setWallet(newWallet);
		setWalletStatus();
	}

	async function openWallet(password) {
		try {
			const decrypted = await ethers.Wallet.fromEncryptedJson(
				encrypedWallets,
				password,
			);
			if (decrypted) {
				setWallet(decrypted);
				setWalletStatus();
			}
		} catch (error) {
			setWalletErrors(error.message);
		}
	}

	useEffect(() => {
		if (!encrypedWallets) {
			setWalletStatus("create");
		}

		if (encrypedWallets && !wallet) {
			setWalletStatus("open");
		}
	}, [encrypedWallets, wallet]);

	const value = {
		wallet,
		walletErrors,
		walletStatus,
		createWallet,
		importMnemonic,
		importPrivateKey,
		openWallet,
	};

	if (walletStatus === "create") {
		return (
			<WalletContext.Provider value={value}>
				<CreateWallet />
			</WalletContext.Provider>
		);
	}
	if (walletStatus === "open") {
		return (
			<WalletContext.Provider value={value}>
				<OpenWallet />
			</WalletContext.Provider>
		);
	}

	if (!wallet) {
		return <div>Loading...</div>;
	}

	return (
		<WalletContext.Provider value={value}>{children}</WalletContext.Provider>
	);
}
