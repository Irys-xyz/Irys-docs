---
description: Pausing and resuming uploads.
---

# Controlling The Upload

Uploads created with the chunked uploader can be paused and resumed at any time using the functions `uploader.pause()` and `uploader.resume()`. For these functions to work, the initial call to `uploader.uploadData()` or `uploader.uploadTransaction()` must not be preceded with the `await` keyword.

To resume an upload from a new uploader instance, you must use the same:

-   Currency.
-   Bundlr node.
-   Input data.
-   Configured chunk size.

## `uploader.pause()` and `uploader.resume()`

```js
// When uploading smaller files, it's common to use they await keyword before
// uploadData() or uploadTransaction(). This causes execution to pause until the file
// is fully uploaded. If you omit await, the upload happens in the background
// and you can use pause and resume as needed.
transaction = bundlr.createTransaction("Hello, world!");
uploader = bundlr.uploader.chunkedUploader; // recreate for each transaction
const upload = uploader.uploadTransaction(transaction);
uploader.pause(); // pauses the upload
console.log("Upload paused");
uploader.resume(); // resumes the upload
console.log("Upload resumed");
```

While the initial call to `uploader.uploadData()` or `uploader.uploadTransaction()` should not use the `await` keyword, you can use it down the line to ensure the upload has completed.

You can call await at ANY TIME to ensure the upload has completed.

```js
response = await upload;
```
