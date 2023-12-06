import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
	return (
		<Html>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&display=swap"
					rel="stylesheet"
				/>

				<meta property="og:url" content="https://docs.irys.xyz" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Irys | Docs" />
				<meta
					property="og:description"
					content="Unlock the full potential of Irys' technology with our developer resources. Use our SDK and start storing data permanently with 3-4 lines of code."
				/>
				<meta
					property="og:image"
					content="https://irys.xyz/new/assets/shared/open-graph.png"
				/>

				<meta name="twitter:card" content="summary_large_image" />
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
