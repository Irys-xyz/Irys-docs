---
description: All command line options and flags.
---

# Usage

The command `bundlr help` returns a list of all commands and option flags.

```console
bundlr help
Options:
 -h, --host <string>          Bundlr node hostname/URL (eg http://node1.bundlr.network)
 -w, --wallet <string>        Path to keyfile or the private key itself (default: "default")
 -c, --currency <string>      The currency to use
 --timeout <number>           The timeout (in ms) for API HTTP requests - increase if you get timeouts for upload
 --no-confirmation            Disable confirmations for certain actions
 --multiplier <number>        Adjust the multiplier used for tx rewards - the higher the faster the network will process the
                              transaction. (default: "1.00")
 --batch-size <number>        Adjust the upload-dir batch size (process more items at once - uses more resources (network, memory,
                              cpu) accordingly!) (default: "5")
 --debug, -d                  Increases verbosity of errors and logs additional debug information. Used for troubleshooting.
                              (default: false)
 --index-file <string>        Name of the file to use as an index for upload-dir manifests (relative to the path provided to
                              upload-dir).
 --provider-url <string>      Override the provider URL
 --contract-address <string>  Override the contract address
 --content-type <string>      Override the content type for *ALL* files uploaded
 --remove-deleted             Removes previously uploaded (but now deleted) items from the manifest
 --force-chunking             Forces usage of chunking for all files regardless of size
 -v, --version                Gets the current package version of the bundlr client
 --help                       display help for command

Commands:
 balance <address>            Gets the specified user's balance for the current Bundlr node
 withdraw <amount>            Sends a fund withdrawal request
 upload <file>                Uploads a specified file
 upload-dir <folder>          Uploads a folder (with a manifest)
 deploy <folder>              (DEPRECATED - use the functionally identical 'upload-dir' instead.) Deploys a folder (with a
                              manifest) to the specified bundler
 fund <amount>                Funds your account with the specified amount of atomic units
 price <bytes>                Check how much of a specific currency is required for an upload of <amount> bytes
 help [command]               display help for command
```
