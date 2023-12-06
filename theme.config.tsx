import Footer from "./components/Footer";
import IrysLogoText from "./components/svg/IrysLogoText";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const FooterWrapper = () => {
	const router = useRouter();
	return <Footer noPadding={router.asPath !== "/"} />;
};

export default {
	nextThemes: {
		defaultTheme: "dark",
	},
	themeSwitch: {
		useOptions() {
			return {
				dark: "Dark",
			};
		},
	},
	editLink: {
		component: () => null,
	},
	feedback: {
		content: () => null,
	},
	sidebar: {
		toggleButton: true,
	},
	logo: <IrysLogoText width={65} />,
	project: {
		link: "https://github.com/Irys-xyz/",
	},
	footer: {
		component: FooterWrapper,
	},
	// banner: {
	// 	key: "dev-quest2",
	// 	text: (
	// 		<a href="/developer-docs/status" target="_blank">
	// 			Irys and NodeJS v20 Incompatibility Update. Read More →
	// 		</a>
	// 	),
	// },
	useNextSeoProps() {
		const { asPath } = useRouter();
		if (asPath !== "/") {
			return {
				titleTemplate: "Irys (previously Bundlr) | %s",
			};
		}
	},
	head: () => {
		const { frontMatter } = useConfig();

		return (
			<>
				<meta property="og:url" content="https://docs.irys.xyz" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={frontMatter.title || "Irys | Docs"} />
				<meta
					property="og:image"
					content="https://irys.xyz/new/assets/shared/open-graph.png"
				/>
				<meta
					property="og:description"
					content={
						frontMatter.description ||
						"Unlock the full potential of Irys’ technology with our developer resources. Start building on Irys today!"
					}
				/>
				<meta name="twitter:card" content="summary_large_image" />
			</>
		);
	},
};
