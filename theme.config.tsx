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
	banner: {
		key: "dev-quest2",
		text: (
			<a href="https://irys.xyz/blog/bundlr-is-now-irys" target="_blank">
				🎉 Bundlr is now Irys. Read More →
			</a>
		),
	},
	useNextSeoProps() {
		const { asPath } = useRouter();
		if (asPath !== "/") {
			return {
				titleTemplate: "Irys (previously Bundlr) | %s",
			};
		}
	},
	head: () => {
		const { asPath, defaultLocale, locale } = useRouter();
		const { frontMatter } = useConfig();
		const url = "https://my-app.com" + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

		return (
			<>
				<meta property="og:url" content="https://docs.irys.xyz" />
				<meta property="og:title" content={frontMatter.title || "Irys"} />
				<meta
					property="og:description"
					content={
						frontMatter.description ||
						"Unlock the full potential of Irys’ technology with our developer resources. Start building on Irys today!"
					}
				/>
			</>
		);
	},
};
