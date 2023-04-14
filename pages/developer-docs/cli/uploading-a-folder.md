---
sidebar_position: 10
sidebar_label: Uploading A Folder
description: Uploading an entire folder from the CLI.
slug: /cli/upload-folder
---

# Uploading A Folder

Use the `upload-dir` command followed by a file name to upload a directory. The CLI will respond with a manifest id that can be used to query the network for the uploaded files.

Required option flags:

-   -h: Node address (eg: `https://node1.bundlr.network`)
-   -w: Name of wallet file on your local system
-   -c: Currency (eg: arweave)

## `bundlr upload-dir`

```console
bundlr upload-dir <directory_name> -h <node_address> -w <wallet_file> -c <currency>
bundlr upload-dir imagesFolder -h https://node1.bundlr.network -w wallet.json -c arweave
> Uploaded to https://arweave.net/Y-vH39aFDcLW--TA9cMR-4icvlMBiKZft3sL0HUlTxk
```

Files uploaded via `upload-dir` can be retrieved in one of two ways.

Creating an URL with the format `https://arweave.net/[manifed_id]/[original_file_name]`.
Creating an URL using the transaction ID of each individual file uploaded with the format `https://arweave.net/[transacton_id]`

After a successful folder upload, two files are written to your local project directory `[folder_name].csv` and `[folder_name].json`. Looking at the example below highlighting a folder called “llama_folder” with a total of 5 files in it. The transaction id for each file can be used to retrieve the uploaded data by forming an URL with the format `https://arweave.net]/[transaction_id]`

![llama-folder](/img/code-assets/llama-folder-manifest.png)
