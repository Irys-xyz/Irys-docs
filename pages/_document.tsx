import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
	return (
		<Html>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&display=swap"
					rel="stylesheet"
				/>
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
