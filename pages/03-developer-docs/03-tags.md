---
sidebar_position: 3
sidebar_label: Metadata Tagging
description: Tagging uploads with custom metadata.
slug: /metadata-tagging
---

# Metadata Tagging

Bundlr supports adding tags or metadata to each transaction.

## Content-Type

When uploading a file that will be rendered by the browser, you must specify the [content-type (MIME type)](https://developer.mozilla.org/en-US/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types).

```js
const nft = fs.readFileSync("/path/to/nft.png");
const tags = [{ name: "Content-Type", value: "image/png" }];
const tx = await bundlr.upload(nft, {
	tags: [{ tags }],
});
console.log(tx);
console.log(`File uploaded ==> https://arweave.net/${tx.id}`);
```

## Application

You can label your application name, which is helpful if you need to filter transactions by application.

```js
const nft = fs.readFileSync("/path/to/nft.png");
const tags = [
	{ name: "Content-Type", value: "image/png" },
	{ name: "appName", value: "NFTs To The Moon" },
];
const tx = await bundlr.upload(nft, {
	tags: [{ tags }],
});
console.log(tx);
console;
```

## Custom

Additionally, you can use any tags your specific use case requires.
