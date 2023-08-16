---
description: Uploading an entire folder from the CLI.
---

# Uploading a folder

Use the `upload-dir` command followed by a file name to upload a directory. The CLI will respond with a manifest id that can be used to query the network for the uploaded files.

Required option flags:

-   -h: Node address (eg: `https://node1.bundlr.network`)
-   -w: Name of wallet file on your local system
-   -c: Currency (eg: arweave)

## `bundlr upload-dir`

```console
bundlr upload-dir <directory-name> -h <node-address> -w <wallet-file> -c <currency>
bundlr upload-dir imagesFolder -h https://node1.bundlr.network -w wallet.json -c arweave
> Uploaded to https://arweave.net/Y-vH39aFDcLW--TA9cMR-4icvlMBiKZft3sL0HUlTxk
```

Files uploaded via `upload-dir` can be retrieved in one of two ways.

Creating an URL with the format `https://arweave.net/[manifest-id]/[original-file-name]`.
Creating an URL using the transaction ID of each individual file uploaded with the format `https://arweave.net/[transacton-id]`

After a successful folder upload, two files are written to your local project directory `[folder-name].csv` and `[folder-name].json`. Looking at the example below highlighting a folder called "llama-folder" with a total of 5 files in it. The transaction id for each file can be used to retrieve the uploaded data by forming an URL with the format `https://arweave.net]/[transaction-id]`

![llama-folder](/img/code-assets/llama-folder-manifest.png)
