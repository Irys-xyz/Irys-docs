---
sidebar_position: 9
sidebar_label: Uploading Data
description: Uploading data to Bundlr / Arweave.
slug: /sdk/uploading-data
---

# Uploading Data

The function `bundlr.upload(data)` uploads any arbitrary data passed to it. The transaction id returned as part of the response is used to download the data, simply create a URL with the following format `https://arweave.net/[transaction_id]`.

:::note
For more information on how uploads are timestamped, please see [Proof Of Provenance](/learn/proof-of-provenance).
:::

```js
// Upload data
const dataToUpload = "Hello world.";
try {
	const response = await bundlr.upload(dataToUpload);
	console.log(`Data uploaded ==> https://arweave.net/${response.id}`);
} catch (e) {
	console.log("Error uploading file ", e);
}
```
