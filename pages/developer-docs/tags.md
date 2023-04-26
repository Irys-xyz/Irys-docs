---
description: Tagging uploads with custom metadata.
---

# Metadata Tagging

Bundlr supports attaching metadata tags to each transaction. Tags can be used to categorize transactions, making it easier to search for and retrieve relevant information. Tags also play a role in Proof Of Provenance

Tags are available for querying via [GraphQL](/developer-docs/querying-data).

## Content-Type

When uploading a file that will be rendered by the browser, you must specify the [content-type (MIME type)](https://developer.mozilla.org/en-US/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types).

```js
// Your file
const fileToUpload = "./myImage.png";

// Add a custom tag that tells the gateway how to serve this file to a browser
const tags = [{ name: "Content-Type", value: "image/png" }];

try {
	const response = await bundlr.uploadFile(fileToUpload, tags);
	console.log(`File uploaded ==> https://arweave.net/${response.id}`);
} catch (e) {
	console.log("Error uploading file ", e);
}
```

## Application

You can label your application name, which is helpful if you need to filter transactions by application.

```js
// Your file
const fileToUpload = "./myNFT.png";

const tags = [
	{ name: "Content-Type", value: "image/png" },
	{ name: "appName", value: "NFTs To The Moon" },
];
try {
	const response = await bundlr.uploadFile(fileToUpload, tags);
	console.log(`File uploaded ==> https://arweave.net/${response.id}`);
} catch (e) {
	console.log("Error uploading file ", e);
}
```

## Custom

Additionally, you can use any tags your specific use case requires.
