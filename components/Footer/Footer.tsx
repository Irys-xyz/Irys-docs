import { DiscordIcon, GitIcon, MediumIcon, MirrorIcon, TelegramIcon, TwitterIcon } from "../svg";

import FooterDesktop from "../NewFooter/FooterDesktop";
import FooterMobile from "../NewFooter/FooterMobile";

const Footer = ({
	noPadding
}: {
	noPadding?: boolean
}) => {
	const DEFINITIONS = [
		{
			title: "OVERVIEW",
			options: [
				{
					name: "About Bundlr",
					href: "/overview/about-bundlr",
					newTab: false,
				},
				{
					name: "Permanent Decentralized Storage",
					href: "/overview/solutions/permanent-storage",
					newTab: false,
				},
				{
					name: "Proof of Provenance",
					href: "/overview/solutions/proof-of-provenance",
					newTab: false,
				},
				{
					name: "General FAQs",
					href: "/faqs/general-faq",
					newTab: false,
				},
				{
					name: "Developer FAQs",
					href: "/faqs/dev-faq",
					newTab: false,
				},
			],
		},
		{
			title: "DEVELOPER DOCS",
			options: [
				{
					name: "Quickstart",
					href: "/developer-docs/quickstart",
					newTab: false,
				},
				{
					name: "SDK",
					href: "/developer-docs/sdk",
					newTab: false,
				},
				{
					name: "CLI",
					href: "/developer-docs/cli",
					newTab: false,
				},
			],
		},
		{
			title: "HANDS ON",
			options: [
				{
					name: "Tutorials",
					href: "/hands-on/tutorials",
				},
				{
					name: "Developer Quests",
					href: "/hands-on/quests",
				},
			],
			footer: (
				<div className="mt-auto flex items-center gap-[21px] pb-[40px]">
					<a
						href="https://medium.com/bundlr-network"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105 text-black hover:text-black"
					>
						<MediumIcon />
					</a>
					<a
						href="https://mirror.xyz/0x9AbB09BF9F58E72A532E859d798eB4E8e10A35e1"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105 text-black hover:text-black"
					>
						<MirrorIcon className="w-6 h-6 text-black" />
					</a>
					<a
						href="https://twitter.com/BundlrNetwork"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105 text-black hover:text-black"
					>
						<TwitterIcon />
					</a>
					<a
						href="https://discord.gg/bundlr"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105 text-black hover:text-black"
					>
						<DiscordIcon />
					</a>
					<a
						href="https://github.com/Bundlr-Network"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105 text-black hover:text-black"
					>
						<GitIcon />
					</a>
					<a
						href="https://t.me/bundlr"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105 text-black hover:text-black"
					>
						<TelegramIcon />
					</a>
				</div>
			),
		},
	];

	return (
		<>
			<FooterMobile data={DEFINITIONS} />
			<FooterDesktop data={DEFINITIONS} noPadding={noPadding} />
		</>
	);
};

export default Footer;
