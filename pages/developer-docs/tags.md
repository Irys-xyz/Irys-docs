---
description: Tagging uploads with custom metadata.
---

# Metadata tagging

Bundlr supports attaching metadata tags to each transaction.

Tags can be used to:

-   Categorize transactions, making it easier to search for and retrieve relevant information using [GraphQL](/developer-docs/graphql)
-   Build [provenance chains](/developer-docs/recipes/provenance-chain) for [Proof Of Provenance](/overview/solutions/proof-of-provenance) applications
-   Inform web browsers how to render image files

## `Content-Type`

Browsers use the [`Content-Type`](<(https://developer.mozilla.org/en-US/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)>) metatag to identify the specific media type (e.g., image/jpeg, image/png) of the resource. This information ensures that the browser correctly displays the image, rather than treating it as generic binary data.

This tag is added automatically when using our NodeJS SDK and uploading files with a valid extension. When using the [WebBundlr class to upload from the browser](/developer-docs/sdk/bundlr-in-the-browser), you must add the tag manually.

```js
// Your file
const dataStream = fileReaderStream(fileToUpload);

const tags = [{ name: "Content-Type", value: "image/png" }];
const response = await webBundlr.upload(dataStream, { tags });

console.log(`File uploaded ==> https://arweave.net/${response.id}`);
```

## Application labeling

You can label your application name, which is helpful if you need to [filter transactions by those created by your application](/developer-docs/graphql#tags).

```js
// Your file
const fileToUpload = "./myNFT.png";

const tags = [{ name: "app-id", value: "NFTs To The Moon" }];
try {
	const response = await bundlr.uploadFile(fileToUpload, { tags });
	console.log(`File uploaded ==> https://arweave.net/${response.id}`);
} catch (e) {
	console.log("Error uploading file ", e);
}
```

## Custom

You can use any custom tags your use case requires.

## Tag limits

You can attach a maximum of 20 tags to any transaction, this includes the `Content-Type` tag added automatically when uploading using our NodeJS SDK.
