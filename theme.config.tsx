import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

export default {
  logo: <span>Bundlr Docs</span>,
  project: {
    link: "https://github.com/shuding/nextra",
  },
  // head: () => {
  //   const { asPath, defaultLocale, locale } = useRouter();
  //   const { frontMatter } = useConfig();
  //   const url =
  //     "https://my-app.com" +
  //     (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

  //   return (
  //     <>
  //       <meta property="og:url" content={url} />
  //       <meta property="og:title" content={frontMatter.title || "Bundlr"} />
  //       <meta
  //         property="og:description"
  //         content={
  //           frontMatter.description ||
  //           "Unlock the full potential of Bundlr's technology with our developer resources. Use our SDK and start storing data permanently with 3-4 lines of code."
  //         }
  //       />
  //     </>
  //   );
  // },
};
