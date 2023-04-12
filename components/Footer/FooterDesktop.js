import React, { useEffect, useState } from "react";

import FooterLogo from "./svg/FooterLogo";

const FooterDesktop = ({ data }) => {
  return (
    <>
      <footer className="text-black bg-[#fbf2ed] hidden items-start border-t border-timberwolf px-[50px] font-robotoMono antialiased lg:flex">
        <section className="flex w-auto max-w-[513px] flex-col pt-[36px] leading-none">
          {/* <a href="/"> */}
          <FooterLogo className="cursor-pointer" />
          {/* </a> */}
          <p className="mt-[230px] whitespace-normal text-[62px] tracking-tighter lg:text-[31px]">
            THE WORLD&apos;S <br />
            DATA LAYER
          </p>
          <p className="mt-[47px]">
            {new Date().getFullYear()} Bundlr. All rights reserved.
          </p>
        </section>
        <section className="ml-auto flex h-[568px] min-w-[272px] gap-20">
          {data.map((definition) => {
            return (
              <div
                key={definition.title}
                className="mb-auto flex h-full flex-col border-l border-timberwolf pt-[36px] pl-[30px]"
                style={{
                  borderLeftWidth: "1px",
                  borderLeftStyle: "solid",
                  borderLeftColor: "#d8d8d8",
                }}
              >
                <p className="text-[16px] font-bold">{definition.title}</p>
                <ul className="mt-[50px] flex flex-col gap-[10px] list-none">
                  {definition.options.map((option) => {
                    return (
                      <li
                        key={option.name}
                        className="self-start hover:font-bold -ml-7"
                      >
                        <a
                          href={option.href}
                          target={option.newTab ? "_blank" : "_self"}
                          className="whitespace-nowrap text-base text-black hover:no-underline hover:text-black"
                          rel="noreferrer"
                          passHref
                        >
                          {option.name}
                          {option.label && (
                            <span className="ml-[10px] rounded-full bg-black px-[10px] py-[5px] text-xs font-bold text-white">
                              {option.label}
                            </span>
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                {definition.footer}
              </div>
            );
          })}
        </section>

        <section className="border-l border-timberwolf"></section>
      </footer>
    </>
  );
};

export default FooterDesktop;
