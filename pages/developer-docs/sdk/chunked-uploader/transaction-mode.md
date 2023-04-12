---
sidebar_position: 5
sidebar_label: Transaction Mode
description: Access fine-grained control over transactions.
---

# Transaction Mode

Transaction mode gives you more fine-grained control over the upload workflow. You can create and sign your transaction first, store it and then upload when it makes the most sense for your application.

```js
uploader = bundlr.uploader.chunkedUploader; // recreate for each transaction
const transaction = bundlr.createTransaction("Hello, world!");
await transaction.sign();
response = await uploader.uploadTransaction(transaction);
console.log(`Transaction mode uploaded ==> https://arweave.net/${response.data.id}`);
```
