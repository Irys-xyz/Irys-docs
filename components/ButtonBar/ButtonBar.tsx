import React, { useState } from "react";
import Button from "../Button";
import { Web3Button } from "@thirdweb-dev/react";

interface ButtonBarProps {
	submitUrl: string;
	contractAddress: string;
	tokenId: number;
}

const ButtonBar: React.FC<ButtonBarProps> = ({ submitUrl, contractAddress, tokenId }) => {
	const successMessage = `Congratulations on finishing the quest! Your NFT has been claimed, you can view it on <a class="underline decoration-white" href="https://testnets.opensea.io/assets/mumbai/0x6a954b537ebd8477320246d47b9d6eee51b49f0b/107" target="_blank">Opensea</a>`;

	const [message, setMessage] = useState<string>("This is a test");
	const [claimButtonText, setClaimButtonText] = useState<string>("Claim NFT!");
	return (
		<div className="flex flex-col">
			<div className="flex flex-row gap-4 mt-10">
				<Button onClick={() => window.open(submitUrl)}>Submit Quest</Button>
				<Web3Button
					contractAddress={contractAddress}
					action={(contract) => contract.erc1155.claim(tokenId, 1)}
					className="bundlr-web3-button"
					onSuccess={() => setMessage(successMessage)}
					onError={(error) => setMessage(error.message)}
				>
					{claimButtonText}
				</Web3Button>
			</div>
			<div
				className="mt-5 text-left"
				dangerouslySetInnerHTML={{ __html: message }}
			/>
		</div>
	);
};

export default ButtonBar;
