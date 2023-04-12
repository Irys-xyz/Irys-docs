---
sidebar_position: 3
sidebar_label: Setting Upload Parameters
description: Changing batch and chunk size.
---

# Setting Upload Parameters

The default batch size (number of chunks to upload at once) is 5, the default chunk size (maximum chunk size) is 25MB. These values can be changed using the functions `uploader.setBatchSize(size)` and `uploader.setUploadSize(size)`.

```js
// Optionally change the batch size (default is 5)
uploader.setBatchSize(10);

// Optionally change the chunk size (default is 25MB)
// Value is in bytes
uploader.setChunkSize(500000);
```
