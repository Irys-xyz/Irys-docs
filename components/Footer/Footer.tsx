import {
  DiscordIcon,
  GitIcon,
  MediumIcon,
  MirrorIcon,
  TelegramIcon,
  TwitterIcon
} from '../svg'

import FooterDesktop from '../NewFooter/FooterDesktop'
import FooterMobile from '../NewFooter/FooterMobile'

const Footer = () => {

  const DEFINITIONS = [
    {
      title: "LEARN",
      options: [
        {
          name: "What is Bundlr",
          href: "/overview",
          newTab: false,
        },
        {
          name: "Transaction Lifecycle",
          href: "/learn/transaction-lifecycle",
          newTab: false,
        },
        {
          name: "Proof of Provenance",
          href: "/learn/proof-of-provenance",
          newTab: false,
        },
        {
          name: "FAQs",
          href: "/FAQs/general-faq",
          newTab: false,
        },
      ],
    },
    {
      title: "START CODING",
      options: [
        {
          name: "SDK",
          href: "/sdk/basic-features",
          newTab: false,
        },
        {
          name: "WebBundlr",
          href: "/sdk/bundlr-in-the-browser",
          newTab: false,
        },
        {
          name: "CLI",
          href: "/CLI/installation-setup",
          newTab: false,
        },
      ],
    },
    {
      title: "DIVE DEEP",
      options: [
        {
          name: "Recipes",
          href: "/recipes/bundlr-react",
        },
        {
          name: "Tutorials",
          href: "/recipes/bundlr-react",
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
      <FooterDesktop data={DEFINITIONS} />
    </>
  )
}

export default Footer
