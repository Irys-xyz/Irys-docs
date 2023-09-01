import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "@fontsource/roboto-mono";
import "@fontsource/roboto-mono/600.css";
import "@fontsource/roboto-mono/700.css";

import Analytics from "../components/Analytics";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import useGoogleTagManager from "../hooks/useGoogleTagManager";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ethers } from "ethers";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		localStorage.setItem("theme", "dark");
	}, []);

	useGoogleTagManager();

	return (
		<>
			<ThirdwebProvider activeChain="polygon" clientId="8026fd043736df9e5a4bfa9a57e5f66c">
				<Component {...pageProps} />
				<Analytics />
			</ThirdwebProvider>
		</>
	);
}
