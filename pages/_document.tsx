import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
	return (
		<Html>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&display=swap"
					rel="stylesheet"
				/>

				<meta property="og:url" content="https://bundlr.network" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Bundlr" />
				<meta
					property="og:description"
					content="Unlock the full potential of Irys's technology with our developer resources. Use our SDK and start storing data permanently with 3-4 lines of code."
				/>
				<meta property="og:image" content="https://bundlr.network/new/assets/shared/open-graph.png" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="bundlr.network" />
				<meta property="twitter:url" content="https://bundlr.network" />
				<meta name="twitter:title" content="Bundlr | Home" />
				<meta
					name="twitter:description"
					content="Unlock the full potential of Irys's technology with our developer resources. Use our SDK and start storing data permanently with 3-4 lines of code."
				/>
				<meta name="twitter:image" content="https://bundlr.network/new/assets/shared/open-graph.png" />

				{/* // favicon */}
				<link rel="icon" href="/img/favicon.svg" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
