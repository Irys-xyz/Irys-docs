---
description: Using the Bundlr SDK with create-react-app.
---

# Using Bundlr With npx create-react-app

Bundlr is fully compatible with React, however, if you’re using `npx create-react-app` to create your project, you will need to do some additional configuration and installation. This guide details how to create a new React project and add Bundlr support, if you already have a React project open, free to skip down a few steps.

Create a new directory for your project, cd into it, and create your React project:

```console
mkdir bundlr-react
cd bundlr-react
npx create-react-app .
```

Install the Bundlr library and ethers (for interacting with the blockchain):

```console
npm install @bundlr-network/client ethers
```

There are currently two versions of ethers.js in use, if you're using the v5 release, change you `App.js` file to:

```js
import { providers } from "ethers";
import { WebBundlr } from "@bundlr-network/client";

function App() {
	const initialiseBundlr = async () => {
		await window.ethereum.enable();

		const provider = new providers.Web3Provider(window.ethereum);
		await provider._ready();

		const bundlr = new WebBundlr("https://node1.bundlr.network", "matic", provider);
		await bundlr.ready();

		return bundlr; // done!
	};

	return <div className="App">Bundlr Test</div>;
}

export default App;
```

If you're using the v6 beta version, the API has changed and you'll need to use the following code instead.

```js
import { ethers } from "ethers";
import { WebBundlr } from "@bundlr-network/client";

// This code has been updated for ethers.js v6
// https://docs.ethers.org/v6-beta/getting-started/
function App() {
	const initialiseBundlr = async () => {
		// Connect to the MetaMask EIP-1193 object.
		// provider used for writing to the blockchain
		const provider = new ethers.BrowserProvider(window.ethereum);
		// signer used for reading from the blockchain
		const signer = await provider.getSigner();

		// link the signer to the provider
		provider.getSigner = () => signer;

		// create the WebBundlr object
		const bundlr = new WebBundlr("https://node1.bundlr.network", "matic", provider);
		await bundlr.ready();
		console.log("bundlr=", bundlr);

		return bundlr; // done
	};

	return (
		<div className="App">
			<button type="button" onClick={initialiseBundlr}>
				Initialize Bundlr
			</button>
		</div>
	);
}

export default App;
```

Viewing that page, you'll get a bunch of errors saying `BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default`.

To fix this you'll need to include NodeJS polyfills which are no longer included by default.

Install first react-app-rewired, a package that allows for editing of the webpack config file to fix polyfill issue. Then install the missing dependencies.

```
npm install react-app-rewired
npm install --save-dev crypto-browserify stream-browserify assert stream-http https-browserify os-browserify url buffer process
npm install browserify-zlib path-browserify path
```

At the root level of your project, create a new file called config-overrides.js and paste the following in:

```json
const webpack = require("webpack");
module.exports = function override(config) {
   const fallback = config.resolve.fallback || {};
   Object.assign(fallback, {
       crypto: require.resolve("crypto-browserify"),
       stream: require.resolve("stream-browserify"),
       assert: require.resolve("assert"),
       http: require.resolve("stream-http"),
       https: require.resolve("https-browserify"),
       os: require.resolve("os-browserify"),
       url: require.resolve("url"),
       zlib: require.resolve("browserify-zlib"),
   });
   config.resolve.fallback = fallback;
   config.plugins = (config.plugins || []).concat([
       new webpack.ProvidePlugin({
           process: "process/browser",
           Buffer: ["buffer", "Buffer"],
       }),
   ]);
   return config;
};
```

Override package.json to include the new webpack configuration. Look for this code block

```json
 "scripts": {
   "start": "react-scripts start",
   "build": "react-scripts build",
   "test": "react-scripts test",
   "eject": "react-scripts eject"
 },
```

and replace it with this block:

```json
"scripts": {
   "start": "react-app-rewired start",
   "build": "react-app-rewired build",
   "test": "react-app-rewired test",
   "eject": "react-scripts eject"
},

```

Quit out of the React server and restart it with `npm run start` you should be good to go.
