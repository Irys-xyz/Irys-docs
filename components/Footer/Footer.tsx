import { DiscordIcon, GitIcon, MediumIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from "../svg";

import FooterDesktop from "../NewFooter/FooterDesktop";
import FooterMobile from "../NewFooter/FooterMobile";

const Footer = ({ noPadding }: { noPadding?: boolean }) => {
	const DEFINITIONS = [
		{
			title: "DEVELOPER DOCS",
			options: [
				{
					name: "SDK",
					href: "/irys-sdk",
					newTab: false,
				},
				{
					name: "Query package",
					href: "/querying/query-package",
					newTab: false,
				},
				{
					name: "CLI",
					href: "/cli",
					newTab: false,
				},
				{
					name: "Tutorials",
					href: "/tutorials",
				},
				{
					name: "Respositories",
					href: "/repositories",
				},
			],
			footer: (
				<div className="mt-auto flex items-center gap-[21px] pb-[40px]">
					<a
						href="https://youtube.irys.xyz/"
						target="_blank"
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105"
						aria-label="Telegram"
					>
						<YoutubeIcon />
					</a>
					<a
						href="https://twitter.irys.xyz"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105 text-black hover:text-black"
					>
						<TwitterIcon />
					</a>
					<a
						href="https://discord.irys.xyz"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105 text-black hover:text-black"
					>
						<DiscordIcon />
					</a>
					<a
						href="https://github.com/Irys-xyz/"
						target={"_blank"}
						rel="nofollow noreferrer"
						className="transition-all hover:rotate-6 hover:scale-105 text-black hover:text-black"
					>
						<GitIcon />
					</a>
					<a
						href="https://telegram.irys.xyz/"
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
