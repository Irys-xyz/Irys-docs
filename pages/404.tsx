import FaqCategories from "./faqs/_meta.json";
import Heading from "../components/Heading";
import Link from "next/link";
import MainCategories from "./_meta.json";
import React from "react";

type Props = {};

const NotFound = (props: Props) => {
    const metaData = {
        "developer-docs": {
            sdk: "SDK",
            cli: "CLI",
            "using-devnet": "Using Devnet",
            tags: "Tags",
            "querying-data": "Querying Data",
            recipes: "Cut & Paste Code Recipes",
        },
        faqs: {
            "general-faq": "General FAQ",
            "dev-faq": "Developer FAQ",
            "testnet-faq": "Testnet FAQ",
        },
        "hands-on": { tutorials: "Tutorials", quests: "Quests" },
        learn: {
            bundler: "Bundlers",
            bundles: "Bundles",
            "bundlr-arweave": "Bundlr And Arweave",
            gateways: "Gateways",
            receipts: "Receipts",
            "transaction-lifecycle": "Transaction Lifecycle",
            scaling: "Scaling",
            "optimistic-caching": "Optimistic Caching",
            "funding-withdrawing": "Funding And Withdrawing",
        },
        overview: {
            "about-bundlr": "About Bundlr",
            network: "Network",
            solutions: "Solutions",
            services: "Services",
            quickstart: "Quickstart",
            fees: "Fees",
            "supported-tokens": "Supported Tokens",
        },
        "use-cases": { nft: "NFT", deso: "DeSo", depin: "DePin" },
    };

    return (
        <>
            <div className="text-center">
                <header className="py-20 flex flex-col gap-10">
                    <Heading level={1}>Oops, page not found!</Heading>
                    <p>Feel free to try some of the links below!</p>
                </header>
                <div className="grid grid-cols-4 gap-4">
                    {Object.keys(MainCategories).map((category) => {
                        // @ts-ignore
                        if (typeof MainCategories[category] !== "string") return;
                        return (
                            <div>
                                {/* @ts-ignore */}
                                <div>{MainCategories[category]}</div>
                                {/* @ts-ignore */}
                                {metaData[category] && Object.keys(metaData[category]).map((subCategory) => {
                                    return (
                                        <Link href={`/${category}/${subCategory}`}>
                                            {/* @ts-ignore */}
                                            <p>{metaData[category][subCategory]}</p>
                                        </Link>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default NotFound;
