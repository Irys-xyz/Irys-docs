import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "@fontsource/roboto-mono";
import "@fontsource/roboto-mono/600.css";
import "@fontsource/roboto-mono/700.css";

import Analytics from "../components/Analytics";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import useGoogleTagManager from "../hooks/useGoogleTagManager";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ethers } from "ethers";

export default function App({ Component, pageProps }: AppProps) {
	const [signer, setSigner] = useState<ethers.Signer | undefined>();

	useEffect(() => {
		localStorage.setItem("theme", "dark");
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined" && window.ethereum) {
			setSigner(new ethers.providers.Web3Provider(window.ethereum).getSigner());
		}
		console.log("signer", signer);
	}, []);

	useGoogleTagManager();

	return (
		<>
			<ThirdwebProvider activeChain={"polygon"} signer={signer} clientId="8026fd043736df9e5a4bfa9a57e5f66c">
				<Component {...pageProps} />
				<Analytics />
			</ThirdwebProvider>
		</>
	);
}
