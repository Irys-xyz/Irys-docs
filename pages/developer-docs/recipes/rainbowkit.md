---
description: Making RainbowKit providers work with the Bundlr SDK.
---

# Using Bundlr With RainbowKit / WAGMI Hooks

There is a small bit of massaging needed to get Bundlr and RainbowKit to work together properly.

If you prefer to learn with a tutorial, we have [this one](/hands-on/tutorials/react-components) on building a web app using React, RainbowKit and Bundlr.

When using WebBundlr without RainbowKit, the following code is used

```js
await window.ethereum.enable();
const provider = new providers.Web3Provider(window.ethereum);
await provider._ready();
const bundlr = new WebBundlr("https://devnet.bundlr.network", "matic", provider);
```

The provider object returned by `providers.Web3Provider(window.ethereum)` exposes a function called `getSigner()` which is then called in the WebBundlr constructor.

When using RainbowKit and the wagmi hooks for React, the provider object reference returned by the `getProvider()` hook does not expose the `getSigner()` function. In order to pass this provider reference to the WebBundlr constructor you need to first get a reference to the signer and then use method injection to add it to the provider object reference.

```js
const rainbowKitProvider = useProvider();
const { data: rainbowKitSigner, isError, isLoading } = useSigner();
// use method injection to add the missing function
rainbowKitProvider.getSigner = () => rainbowKitSigner;
const bundlr = new WebBundlr(
	"https://devnet.bundlr.network",
	"matic",
	rainbowKitProvider,
	{
		providerUrl: "https://rpc-mumbai.matic.today",
	},
);
```
