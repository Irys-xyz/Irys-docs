import { DiscordIcon, GitIcon, TelegramIcon, YoutubeIcon } from "../svg";
import IrysLogoText from "../svg/IrysLogoText";
import Link from "next/link";
import SvgXIcon from "../svg/XIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const DEFINITIONS = [
    {
      title: "DEVELOPER DOCS",
      options: [
        { name: "SDK", href: "/developer-docs/irys-sdk" },
        {
          name: "Query package",
          href: "/developer-docs/querying/query-package",
        },
        {
          name: "Provenance Toolkit",
          href: "/developer-docs/provenance-toolkit",
        },
        { name: "CLI", href: "/developer-docs/cli" },
        { name: "Tutorials", href: "/hands-on/tutorials" },
        { name: "Repositories", href: "/repositories" },
      ],
    },
  ];

  const ExternalLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a
      href={href}
      target="_blank"
      rel="nofollow noreferrer"
      className="transition-all hover:rotate-6 hover:scale-105 text-white hover:text-white"
    >
      {children}
    </a>
  );

  const FooterLink = ({
    href,
    name,
    newTab,
  }: {
    href: string;
    name: string;
    newTab?: boolean;
  }) => (
    <li className="hover:underline transition-all text-[#B7B7B7] text-base text-center">
      <Link legacyBehavior href={href} passHref>
        <a target={newTab ? "_blank" : "_self"} className="whitespace-nowrap">
          {name}
        </a>
      </Link>
    </li>
  );

  return (
    <footer className="py-20 px-6 md:py-16 md:p-10 xl:p-20 bg-black rounded-xl">
      <section className="flex flex-col md:flex-row items-center justify-between md:items-start w-full gap-20 md:gap-10">
        <div className="flex flex-col gap-6">
          <Link href="/">
            <IrysLogoText className="cursor-pointer w-[100px]" />
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex items-center gap-[21px]">
            <ExternalLink href="https://youtube.irys.xyz/">
              <YoutubeIcon />
            </ExternalLink>
            <ExternalLink href="https://twitter.irys.xyz">
              <SvgXIcon />
            </ExternalLink>
            <ExternalLink href="https://discord.irys.xyz">
              <DiscordIcon />
            </ExternalLink>
            <ExternalLink href="https://github.com/Irys-xyz/">
              <GitIcon />
            </ExternalLink>
            <ExternalLink href="https://telegram.irys.xyz/">
              <TelegramIcon />
            </ExternalLink>
          </div>
        </div>
      </section>

      <section className="flex flex-col xl:flex-row items-center justify-between mt-20 gap-20">
        <div>
          {DEFINITIONS.map((definition) => (
            <div
              key={definition.title}
              className="flex items-center gap-10 flex-col"
            >
              <ul className="flex flex-col md:flex-row gap-14">
                {definition.options.map((option) => (
                  <FooterLink key={option.name} {...option} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="flex items-center gap-2 text-[#B7B7B7]">
          {currentYear} Irys. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
