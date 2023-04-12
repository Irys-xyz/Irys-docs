---
sidebar_position: 2
sidebar_label: Bundlr In The Browser
description: Using the WebBundlr class to interact with Bundlr from the browser
slug: /sdk/bundlr-in-the-browser
---

# Bundlr In The Browser (WebBundlr)

In order to use Bundlr with browser wallets like MetaMask and Phantom, use the `WebBundlr` class. Usage is very similar to the Bundlr class used with server-side development, however you don’t need to provide a private key as that will be linked via the user’s wallet. Whenever any functions that require signing are called (upload, fund, withdraw etc.) the linked wallet will prompt the user to confirm the required actions.

:::note
We recommend using ethers version 5 which our SDK fully supports. Ethers version 6 is not yet fully supported, however if your project does require it there are code options below which will work.
:::

If you’d prefer to learn using a long-form tutorial, [we have this one on creating a web-based uploader with progress bars](/tutorials/file-uploader).

Import our SDK and connect to a Bundlr node using injected providers and ethers version 5.

```js
import { providers } from “ethers”;
import { WebBundlr } from "@bundlr-network/client";

await window.ethereum.enable();
const provider = new providers.Web3Provider(window.ethereum);
const bundlr = new WebBundlr("https://node2.bundlr.network", "matic", provider);
await bundlr.ready();
```

Import our SDK and connect to a Bundlr node using injected providers and ethers version 6.

```js
import { ethers } from "ethers";
import { WebBundlr } from "@bundlr-network/client";

const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();

provider.getSigner = () => signer;

const bundlr = new WebBundlr("https://node1.bundlr.network", "matic", provider);
await bundlr.ready();
```

And to upload a file

```js
const dataStream = fileReaderStream(fileToUpload);
const tx = await bundlr.upload(dataStream, {
	tags: [{ name: "Content-Type", value: fileType }],
});
console.log(tx);
console.log(`File uploaded ==> https://arweave.net/${tx.id}`);
```
