---
description: Linking your wallet's private key.
---

# Setting a private key

A private key is required when funding a node or uploading a file. If paying using AR, the CLI will automatically try to load a private key stored in "./wallet.json". For all other currencies, there is no default behavior and a private key must be specified.

When specifying a non-Arweave private key, you must also specify the currency using the -c option.

The -w and -c option flags are used in conjunction with the other commands outlined below. They have no utility when used alone and have no effect on global state.

## `bundlr -w`

```console
bundlr -w <wallet-file-name> -c <currency>
bundlr -w myKeyPair.json
bundlr -w myEthKeyPair.json -c ethereum
```
