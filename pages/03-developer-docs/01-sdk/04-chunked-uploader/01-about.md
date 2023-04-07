---
sidebar_position: 1
sidebar_label: About
description: A fault-tolerant, resumable, signer & uploader.
---

# About

The chunked uploader is a fault-tolerant, resumable, stream-based signer and uploader. It allows you to pause and resume uploads, and to do things like create progress bars to show upload progress.

The chunked uploader is supported both with Bundlr / NodeJS on the server and with WebBundlr in the browser. This code shows how to use it with the standard Bundlr / NodeJS combination. We also have a step-by-step tutorial that teaches you how to build a full web application using WebBundlr.

Key Terminology:

-   Batch size - the maximum number of chunks to upload at once. Defaults to 5.
-   Chunk size - the maximum size of a single chunk. Defaults to 25MB. For those with slower/unstable connections, reducing both should lead to improved reliability. For those with faster connections, increasing both will lead to higher throughput, at the cost of more memory (and CPU).

If you prefer to dive into the code, this information exists in (heavily commented form) in our [GitHub](https://github.com/Bundlr-Network/bundlr-basics/blob/master/scripts/chunked-uploader.js).

:::note
The default uploder (accessed via `bundlr.upload()`) does chunking automatically. You only need to use the Chunked Uploader to access advanced features like pausing and resuming uploads, changing batch size, and changing chunk size.
:::
