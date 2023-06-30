---
description: Tagging uploads with custom metadata.
---

# Metadata Tagging

Irys supports attaching metadata tags to each transaction.

Tags can be used to:

-   Categorize transactions, making it easier to search for and retrieve relevant information using [GraphQL](/developer-docs/graphql)
-   Build provenance chains for [Proof Of Provenance](/overview/solutions/proof-of-provenance) applications
-   Inform web browsers how to render image files

## Content-Type

When uploading a file that will be rendered by the browser, you must specify the [content-type (MIME type).](https://developer.mozilla.org/en-US/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)

```js
// Your file
const fileToUpload = "./myImage.png";

// Add a custom tag that tells the browser how to properly render the file
const tags = [{ name: "Content-Type", value: "image/png" }];

try {
	const response = await irys.uploadFile(fileToUpload, tags);
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
	const response = await irys.uploadFile(fileToUpload, tags);
	console.log(`File uploaded ==> https://arweave.net/${response.id}`);
} catch (e) {
	console.log("Error uploading file ", e);
}
```

## Custom

You can use any custom tags your use case requires.
