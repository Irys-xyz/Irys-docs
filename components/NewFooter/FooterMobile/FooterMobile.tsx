import {
  DiscordIcon,
  FooterLogo,
  GitIcon,
  MediumIcon,
  MinusFooterDetailIcon,
  MirrorIcon,
  PlusFooterDetailIcon,
  TelegramIcon,
  TwitterIcon
} from '../../svg'
import { useEffect, useState } from 'react'

import Link from 'next/link'

const FooterMobile = ({
  data
}: {
  data: {
    title: string
    options: {
      name: string
      href: string
      label?: string
    }[]
  }[]
}) => {
  return (
    <>
      <footer className="border-t border-timberwolf bg-seashell px-[20px] pt-[56px] pb-10 font-robotoMono lg:hidden text-black">
        <FooterLogo />
        <p className="mt-[60px] mb-[68px] whitespace-normal text-[40px] leading-none tracking-tighter">
          THE WORLD&apos;S <br />
          DATA LAYER
        </p>
        {data.map((definition) => (
          <ExpandableSection
            title={definition.title}
            options={definition.options}
            key={definition.title}
          />
        ))}
        <section className="mt-[60px] flex items-center gap-[21px] pb-[10px]">
          <a
            href="https://medium.com/bundlr-network"
            target={'_blank'}
            rel="nofollow noreferrer"
            className="transition-all hover:rotate-6 hover:scale-105"
          >
            <MediumIcon />
          </a>
          <a
            href="https://mirror.xyz/0x9AbB09BF9F58E72A532E859d798eB4E8e10A35e1"
            target={'_blank'}
            rel="nofollow noreferrer"
            className="transition-all hover:rotate-6 hover:scale-105"
          >
            <MirrorIcon className="h-6 w-6 text-black" />
          </a>
          <a
            href="https://twitter.com/BundlrNetwork"
            target={'_blank'}
            rel="nofollow noreferrer"
            className="transition-all hover:rotate-6 hover:scale-105"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://discord.gg/bundlr"
            target={'_blank'}
            rel="nofollow noreferrer"
            className="transition-all hover:rotate-6 hover:scale-105"
          >
            <DiscordIcon />
          </a>
          <a
            href="https://github.com/Bundlr-Network"
            target={'_blank'}
            rel="nofollow noreferrer"
            className="transition-all hover:rotate-6 hover:scale-105"
          >
            <GitIcon />
          </a>
          <a
            href="https://t.me/bundlr"
            target={'_blank'}
            rel="nofollow noreferrer"
            className="transition-all hover:rotate-6 hover:scale-105"
          >
            <TelegramIcon />
          </a>
        </section>
        <p className="mt-[17px] mb-[36px]">
          {new Date().getFullYear()} Bundlr. All rights reserved.
        </p>
      </footer>
    </>
  )
}

const ExpandableSection = ({
  title,
  options
}: {
  title: string
  options: {
    name: string
    href: string
    label?: string
    newTab?: boolean
  }[]
}) => {
  return (
    <details>
      <summary className="mt-[26px] flex cursor-pointer items-center justify-between text-[15px] font-medium">
        {title}
        <PlusFooterDetailIcon />
        <MinusFooterDetailIcon />
      </summary>
      <ul className="mt-[20px]">
        {options.map((option, index) => (
          <li className="mt-[20px]" key={`option-${option}-${index}`}>
            <Link
              href={option.href}
              className="text-[15px]"
              target={option.newTab ? '_blank' : '_self'}
              rel="noreferrer"
            >
              {option.name}
            </Link>
            {option.label && (
              <span className="ml-[10px] rounded-full bg-black px-[10px] py-[5px] text-xs font-bold text-white">
                {option.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </details>
  )
}

export default FooterMobile
