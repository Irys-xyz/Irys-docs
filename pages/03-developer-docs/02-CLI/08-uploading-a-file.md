---
sidebar_position: 9
sidebar_label: Uploading A File
description: Uploading a single file from the CLI.
slug: /cli/upload-file
---

# Uploading A File

Use the `upload` command followed by a file name to upload a file. The CLI will respond with the URL used to query the network for the uploaded file.

Required option flags:

-   -h: Node address (eg: https://node1.bundlr.network)
-   -w: Name of wallet file on your local system
-   -c: Currency (eg: arweave)

```console
bundlr upload <file_name> -h <node_address> -w <wallet_file> -c <currency>
bundlr upload image.png -h https://node1.bundlr.network -w wallet.json -c arweave
> Uploaded to https://arweave.net/zt3-t8SHDSck0TLcSuC-hdQb2E0civ0DVMRgwf6sCz0
```
