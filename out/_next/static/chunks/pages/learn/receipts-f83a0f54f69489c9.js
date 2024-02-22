(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2347],{68600:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/receipts",function(){return n(42490)}])},60600:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(85893);let i=e=>{let{level:t}=e;return{Tag:"h".concat(t),HEADING_DEFINITION:({1:"font-bold text-6xl lg:text-7xl tracking-[-.02em]",2:"font-bold text-5xl lg:text-6xl tracking-[-.02em]",3:"font-bold text-4xl lg:text-5xl tracking-[-.02em]",4:"font-bold text-3xl lg:text-4xl tracking-[-.02em]",5:"font-bold text-2xl lg:text-3xl tracking-[-.02em]",6:"font-bold text-lg lg:text-xl tracking-[-.02em]"})[t]}},a=e=>{let{level:t,className:n,children:a,...o}=e,{Tag:s,HEADING_DEFINITION:d}=i({level:t});return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s,{className:"".concat(d," ").concat(n||""),...o,children:a})})};var o=a},63288:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(85893),i=n(60600);let a=()=>({}),o=e=>{let{title:t}=e,{}=a();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"34",height:"28",fill:"none",viewBox:"0 0 34 28",children:(0,r.jsx)("path",{fill:"currentColor",stroke:"currentColor",strokeWidth:"0.264",d:"M.95 15.04l-.082.035V18.113l.185-.081 16.594-7.293.08-.035V8.774l-.074-.036L1.06.458.868.363V3.408l.075.036 13.015 6.18L.949 15.04zM33 27.557h.132v-2.52H17.084v2.52H33z"})}),(0,r.jsx)(i.Z,{level:3,children:t})]})})};var s=o},42490:function(e,t,n){"use strict";n.r(t);var r=n(85893),i=n(4319),a=n(2840),o=n(29482);n(19966);var s=n(11151);n(25675);var d=n(60600);function l(e){let t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a",ol:"ol",pre:"pre",code:"code",span:"span",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"flex flex-col mt-5",children:(0,r.jsx)("div",{className:"flex items-end",children:(0,r.jsx)("div",{className:"",children:(0,r.jsx)(d.Z,{level:1,children:"Receipts"})})})}),"\n",(0,r.jsx)(t.p,{children:"Receipts give you cryptographic proof of the exact time, accurate to the millisecond, that a transaction occurred."}),"\n",(0,r.jsx)(t.h2,{id:"receipts--timestamps",children:"Receipts & Timestamps"}),"\n",(0,r.jsx)(t.p,{children:"When you upload data to Irys, it is stamped with a millisecond-accurate timestamp before being passed to Arweave where it is stored permanently."}),"\n",(0,r.jsx)(t.p,{children:"Blockchains rely on timestamps to sequence the order of transactions and blocks. Transaction sequencing plays a critical role in blockchain security as it ensures that all transactions are recorded in the correct order, and that order is never changed."}),"\n",(0,r.jsx)(t.p,{children:"Receipts provide cryptographic proof of a timestamp. This creates a secure and tamper-proof sequence of all transactions, enabling proof of authenticity, permanence, and provenance."}),"\n",(0,r.jsx)(t.h2,{id:"ordering--streaming",children:"Ordering & streaming"}),"\n",(0,r.jsx)(t.p,{children:"Ordering and streaming applications process and deliver data in real-time. They're commonly used for messaging, event processing, and data integration. They transfer high data volumes between independent applications while maintaining high performance and scalability. Popular examples include Apache Kafka and RabbitMQ."}),"\n",(0,r.jsx)(t.p,{children:"Users could use Irys' receipts to:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Build a category-based event streaming application by using ",(0,r.jsx)(t.a,{href:"/developer-docs/querying/query-package",children:"Irys query package"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"why-use-signed-receipts",children:"Why use signed receipts?"}),"\n",(0,r.jsx)(t.p,{children:"Cryptographically signed receipts open up new development options for builders. For example:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Sequential ordering of posts, likes and comments for a decentralized social protocol."}),"\n",(0,r.jsx)(t.li,{children:"Sequential ordering of data generated by a group messaging protocol."}),"\n",(0,r.jsx)(t.li,{children:"Automatically adjudicating music copyright claims."}),"\n",(0,r.jsx)(t.li,{children:"Preserving history, ensuring it's not manipulated over time."}),"\n",(0,r.jsx)(t.li,{children:"Preserving scientific research using Irys' pay-once, store-forever model."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"receipt-permanence",children:"Receipt permanence"}),"\n",(0,r.jsx)(t.p,{children:"Upon posting a transaction to Irys, a receipt is immediately returned to the user."}),"\n",(0,r.jsxs)(t.p,{children:["Irys maintains an internal registry of all receipts, ",(0,r.jsx)(t.a,{href:"/developer-docs/irys-sdk/api/utils-getReceipt",children:"which can be queried whenever a receipt is needed"}),". These receipts are stored in a centralized fashion, which may be sufficient for users comfortable with the trust assumptions of centralized services."]}),"\n",(0,r.jsxs)(t.p,{children:["Users also have the option to use Irys to store the receipt on Arweave. These receipts inherit Arweave’s permanence, meaning you can v",(0,r.jsx)(t.a,{href:"/developer-docs/irys-sdk/api/utils-verifyReceipt",children:"erify transaction sequencing at any time"}),", even if Irys is no longer available."]}),"\n",(0,r.jsx)(t.h2,{id:"receipt-format",children:"Receipt format"}),"\n",(0,r.jsx)(t.p,{children:"Receipts are a JSON object with the following format:"}),"\n",(0,r.jsx)(t.pre,{"data-language":"json","data-theme":"default",hasCopyCode:!0,children:(0,r.jsxs)(t.code,{"data-language":"json","data-theme":"default",children:[(0,r.jsx)(t.span,{className:"line",children:(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  id"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" '"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Txlbl"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"5"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"NgEqUbIkDnnunHC"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"gFx"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"n"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"8"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"_Y"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"92"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"zAsoX"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"54"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"kI"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"8"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"'"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  timestamp"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"1676891681110"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  version"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" '"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"1.0"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"'"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  public"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" '...'"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  signature"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" '...'"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  deadlineHeight"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ..."}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  block"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ..."}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  validatorSignatures"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" []"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(t.span,{className:"line",children:(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:"Transaction id (used to download the data)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp"}),(0,r.jsx)(t.td,{children:"Timestamp (UNIX milliseconds) of when the transaction was created"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"version"}),(0,r.jsx)(t.td,{children:"The version of this JSON file, currently 1.0.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"public"}),(0,r.jsx)(t.td,{children:"Public key of the bundler node used"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"signature"}),(0,r.jsxs)(t.td,{children:["A signed ",(0,r.jsx)(t.a,{href:"/terminology#deep-hash",children:"deep hash"})," of the JSON receipt"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"deadlineHeight"}),(0,r.jsx)(t.td,{children:"The block number by which the transaction must be finalized on Arweave"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"block"}),(0,r.jsx)(t.td,{children:"Deprecated"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"validatorSignatures"}),(0,r.jsx)(t.td,{children:"Deprecated"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"verifying-receipts",children:"Verifying receipts"}),"\n",(0,r.jsxs)(t.p,{children:["You may need to ",(0,r.jsx)(t.a,{href:"/developer-docs/irys-sdk/api/utils-verifyReceipt",children:"verify a receipt"})," at some point after it was issued. For example, if your application’s security depends on the order of transactions, you can then verify every receipt to ensure its order has not been tampered with."]}),"\n",(0,r.jsx)(t.p,{children:"The receipt contains a signature field, which is generated by creating a deep hash of information from the receipt, including transaction ID and timestamp. It is then signed it by Irys."}),"\n",(0,r.jsxs)(t.p,{children:["Using the ",(0,r.jsx)(t.a,{href:"/developer-docs/irys-sdk/api/utils-verifyReceipt",children:"Irys SDK you can verify"})," the signature using the using the same values from the receipt along with the supplied public key."]}),"\n",(0,r.jsx)(t.h2,{id:"timestamp-generation",children:"Timestamp generation"}),"\n",(0,r.jsx)(t.p,{children:"Irys records the precise time of each transaction with a UNIX timestamp in milliseconds. This timestamp is generated by the node that first receives and verifies the transaction."})]})}n(63288);let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/learn/receipts.mdx",route:"/learn/receipts",frontMatter:{description:"Signed receipts provide unrefutable proof of time"},headings:[{depth:2,value:"Receipts & Timestamps",id:"receipts--timestamps"},{depth:2,value:"Ordering & streaming",id:"ordering--streaming"},{depth:2,value:"Why use signed receipts?",id:"why-use-signed-receipts"},{depth:2,value:"Receipt permanence",id:"receipt-permanence"},{depth:2,value:"Receipt format",id:"receipt-format"},{depth:3,value:"Verifying receipts",id:"verifying-receipts"},{depth:2,value:"Timestamp generation",id:"timestamp-generation"}],timestamp:1705576312e3,pageMap:[{kind:"MdxPage",name:"404",route:"/404"},{kind:"Meta",data:{404:{display:"hidden",type:"page",theme:{layout:"raw"},title:"404"},index:{display:"hidden",type:"page",theme:{layout:"raw"},title:"Docs"},test:{display:"hidden"},test2:{display:"hidden"},overview:"OVERVIEW","developer-docs":"DEVELOPER DOCS","hands-on":"HANDS ON",learn:"IRYS 101",terminology:"TERMINOLOGY",faqs:"FAQs",twitter:{title:"Twitter",href:"https://twitter.irys.xyz",newWindow:!0,type:"page"},Discord:{title:"Discord",href:"https://discord.irys.xyz",newWindow:!0,type:"page"},Youtube:{title:"YouTube",href:"https://youtube.irys.xyz",newWindow:!0,type:"page"}}},{kind:"Folder",name:"developer-docs",route:"/developer-docs",children:[{kind:"Meta",data:{"irys-sdk":"Irys SDK",querying:"Querying",cli:"CLI","provenance-toolkit":"Provenance Toolkit","using-devnet":"Using Devnet",tags:"Tags","mutable-references":"Mutable references",downloading:"Downloading"}},{kind:"Folder",name:"cli",route:"/developer-docs/cli",children:[{kind:"Meta",data:{installation:"Installation",commands:"Commands"}},{kind:"Folder",name:"commands",route:"/developer-docs/cli/commands",children:[{kind:"Meta",data:{balance:"balance",price:"price",fund:"fund",withdraw:"withdraw",upload:"upload","upload-dir":"upload-dir"}},{kind:"MdxPage",name:"balance",route:"/developer-docs/cli/commands/balance",frontMatter:{description:"Funds the node with the specified amount of tokens."}},{kind:"MdxPage",name:"fund",route:"/developer-docs/cli/commands/fund",frontMatter:{description:"Funds the node with the specified amount of tokens."}},{kind:"MdxPage",name:"price",route:"/developer-docs/cli/commands/price",frontMatter:{description:"Funds the node with the specified amount of tokens."}},{kind:"MdxPage",name:"upload-dir",route:"/developer-docs/cli/commands/upload-dir",frontMatter:{description:"Funds the node with the specified amount of tokens."}},{kind:"MdxPage",name:"upload",route:"/developer-docs/cli/commands/upload",frontMatter:{description:"Funds the node with the specified amount of tokens."}},{kind:"MdxPage",name:"withdraw",route:"/developer-docs/cli/commands/withdraw",frontMatter:{description:"Funds the node with the specified amount of tokens."}}]},{kind:"MdxPage",name:"installation",route:"/developer-docs/cli/installation",frontMatter:{description:"Install using npm, optionally sudo."}}]},{kind:"MdxPage",name:"cli",route:"/developer-docs/cli",frontMatter:{description:"Use Irys from your CLI"}},{kind:"MdxPage",name:"downloading",route:"/developer-docs/downloading",frontMatter:{description:"Instantly downloading data from a network of gateways"}},{kind:"Folder",name:"irys-sdk",route:"/developer-docs/irys-sdk",children:[{kind:"Meta",data:{"installing-the-sdk":"Installing the SDK",troubleshooting:"Troubleshooting","community-sdk":"Community SDKs","migration-guide":"Migration guide","irys-in-the-browser":"Irys in the browser",api:"API Docs","chunked-uploader":"Chunked uploader","ipfs-cid":"Using IPFS CIDs","manual-transaction":"Manually creating a Tx"}},{kind:"Folder",name:"api",route:"/developer-docs/irys-sdk/api",children:[{kind:"Meta",data:{fund:"fund()",withdrawBalance:"withdrawBalance()",getLoadedBalance:"getLoadedBalance()",getPrice:"getPrice()",upload:"upload()",uploadFile:"uploadFile()",uploadFolder:"uploadFolder()","utils-toAtomic":"utils.toAtomic()","utils-fromAtomic":"utils.fromAtomic()","utils-getReceipt":"utils.getReceipt()","utils-verifyReceipt":"utils.verifyReceipt()","funder-submitFundTransaction":"funder.submitFundTransaction()","uploader-uploadBundle":"uploader.uploadBundle()","uploader-generateManifest":"uploader.generateManifest()"}},{kind:"MdxPage",name:"fund",route:"/developer-docs/irys-sdk/api/fund",frontMatter:{description:"Funds the node with the specified amount of tokens"}},{kind:"MdxPage",name:"funder-submitFundTransaction",route:"/developer-docs/irys-sdk/api/funder-submitFundTransaction",frontMatter:{description:"Returns the receipt associated with the supplied transaction id"}},{kind:"MdxPage",name:"getLoadedBalance",route:"/developer-docs/irys-sdk/api/getLoadedBalance",frontMatter:{description:"Returns the connected wallet's balance on the connected node"}},{kind:"MdxPage",name:"getPrice",route:"/developer-docs/irys-sdk/api/getPrice",frontMatter:{description:"Returns the cost to upload the specified number of bytes"}},{kind:"MdxPage",name:"upload",route:"/developer-docs/irys-sdk/api/upload",frontMatter:{description:"Uploads data"}},{kind:"MdxPage",name:"uploadFile",route:"/developer-docs/irys-sdk/api/uploadFile",frontMatter:{description:"Uploads a file"}},{kind:"MdxPage",name:"uploadFolder",route:"/developer-docs/irys-sdk/api/uploadFolder",frontMatter:{description:"Uploads a folder of files to Irys"}},{kind:"MdxPage",name:"uploader-uploadBundle",route:"/developer-docs/irys-sdk/api/uploader-uploadBundle",frontMatter:{description:"Uploads an array of transactions as a bundle"}},{kind:"MdxPage",name:"utils-fromAtomic",route:"/developer-docs/irys-sdk/api/utils-fromAtomic",frontMatter:{description:"Converts from atomic to standard units"}},{kind:"MdxPage",name:"utils-getReceipt",route:"/developer-docs/irys-sdk/api/utils-getReceipt",frontMatter:{description:"Returns the receipt associated with the supplied transaction id"}},{kind:"MdxPage",name:"utils-toAtomic",route:"/developer-docs/irys-sdk/api/utils-toAtomic",frontMatter:{description:"Converts from standard to atomic units"}},{kind:"MdxPage",name:"utils-verifyReceipt",route:"/developer-docs/irys-sdk/api/utils-verifyReceipt",frontMatter:{description:"Returns the receipt associated with the supplied transaction id"}},{kind:"MdxPage",name:"withdrawBalance",route:"/developer-docs/irys-sdk/api/withdrawBalance",frontMatter:{description:"Withdraws the supplied amount"}}]},{kind:"Folder",name:"chunked-uploader",route:"/developer-docs/irys-sdk/chunked-uploader",children:[{kind:"Meta",data:{"connecting-node":"Conecting to a node","setting-upload-parameters":"Upload parameters","data-mode":"Data mode","transaction-mode":"Transaction mode","controlling-the-upload":"Controlling the upload","expired-uploads":"Expired uploads","upload-events":"Upload events"}},{kind:"MdxPage",name:"connecting-node",route:"/developer-docs/irys-sdk/chunked-uploader/connecting-node",frontMatter:{description:"Sample code for connecting to a node"}},{kind:"MdxPage",name:"controlling-the-upload",route:"/developer-docs/irys-sdk/chunked-uploader/controlling-the-upload",frontMatter:{description:"Pausing and resuming uploads"}},{kind:"MdxPage",name:"data-mode",route:"/developer-docs/irys-sdk/chunked-uploader/data-mode",frontMatter:{description:"Automate transaction creation in data mode"}},{kind:"MdxPage",name:"expired-uploads",route:"/developer-docs/irys-sdk/chunked-uploader/expired-uploads",frontMatter:{description:"Recovering expired uploads"}},{kind:"MdxPage",name:"setting-upload-parameters",route:"/developer-docs/irys-sdk/chunked-uploader/setting-upload-parameters",frontMatter:{description:"Changing batch and chunk size"}},{kind:"MdxPage",name:"transaction-mode",route:"/developer-docs/irys-sdk/chunked-uploader/transaction-mode",frontMatter:{description:"Access fine-grained control over transactions"}},{kind:"MdxPage",name:"upload-events",route:"/developer-docs/irys-sdk/chunked-uploader/upload-events",frontMatter:{description:"Track upload progress with event callbacks"}}]},{kind:"MdxPage",name:"chunked-uploader",route:"/developer-docs/irys-sdk/chunked-uploader",frontMatter:{description:"A fault-tolerant, resumable, signer & uploader"}},{kind:"MdxPage",name:"community-sdk",route:"/developer-docs/irys-sdk/community-sdk",frontMatter:{description:"Use Golang, and other languages, with Irys"}},{kind:"MdxPage",name:"installing-the-sdk",route:"/developer-docs/irys-sdk/installing-the-sdk",frontMatter:{description:"Installing the SDK with Npm and Yarn"}},{kind:"MdxPage",name:"ipfs-cid",route:"/developer-docs/irys-sdk/ipfs-cid",frontMatter:{description:null}},{kind:"MdxPage",name:"irys-in-the-browser",route:"/developer-docs/irys-sdk/irys-in-the-browser",frontMatter:{description:"Using the WebIrys class to interact with Irys from the browser"}},{kind:"MdxPage",name:"manual-transaction",route:"/developer-docs/irys-sdk/manual-transaction",frontMatter:{description:"Manually creating, signing and uploading a transaction."}},{kind:"MdxPage",name:"migration-guide",route:"/developer-docs/irys-sdk/migration-guide",frontMatter:{description:"Migrating from Bundlr SDK to Irys SDK"}},{kind:"MdxPage",name:"troubleshooting",route:"/developer-docs/irys-sdk/troubleshooting",frontMatter:{description:"Troubleshooting common problems"}}]},{kind:"MdxPage",name:"irys-sdk",route:"/developer-docs/irys-sdk",frontMatter:{description:"Quickstart with the Irys SDK"}},{kind:"MdxPage",name:"mutable-references",route:"/developer-docs/mutable-references",frontMatter:{description:"Mutable references enable the creation of a single, static URL that is linked to a sequential series of transactions."}},{kind:"Folder",name:"provenance-toolkit",route:"/developer-docs/provenance-toolkit",children:[{kind:"Meta",data:{"fund-withdraw":"Fund / withdraw",uploader:"Uploader","progress-bar-uploader":"Progress bar uploader","udl-uploader":"UDL uploader","encrypted-uploader":"Encrypted uploader","solana-nft-minter":"Solana NFT minter","gasless-uploader":"Gasless uploader","transaction-feed":"Transaction feed"}},{kind:"MdxPage",name:"encrypted-uploader",route:"/developer-docs/provenance-toolkit/encrypted-uploader",frontMatter:{description:"UI component to encrypt files before uploading to Irys"}},{kind:"MdxPage",name:"fund-withdraw",route:"/developer-docs/provenance-toolkit/fund-withdraw",frontMatter:{description:"UI component to manage funding and withdrawing node balances"}},{kind:"MdxPage",name:"gasless-uploader",route:"/developer-docs/provenance-toolkit/gasless-uploader",frontMatter:{description:"UI component to upload single files or groups of files"}},{kind:"MdxPage",name:"progress-bar-uploader",route:"/developer-docs/provenance-toolkit/progress-bar-uploader",frontMatter:{description:"UI component to manage funding and withdrawing node balances"}},{kind:"MdxPage",name:"solana-nft-minter",route:"/developer-docs/provenance-toolkit/solana-nft-minter",frontMatter:{description:"UI component to upload single files or groups of files"}},{kind:"MdxPage",name:"transaction-feed",route:"/developer-docs/provenance-toolkit/transaction-feed",frontMatter:{description:"UI component to query transaction metadata"}},{kind:"MdxPage",name:"udl-uploader",route:"/developer-docs/provenance-toolkit/udl-uploader",frontMatter:{description:"UI component to manage funding and withdrawing node balances"}},{kind:"MdxPage",name:"uploader",route:"/developer-docs/provenance-toolkit/uploader",frontMatter:{description:"UI component to upload single files or groups of files"}}]},{kind:"MdxPage",name:"provenance-toolkit",route:"/developer-docs/provenance-toolkit",frontMatter:{description:"A collection of UI components to help kickstart your next project."}},{kind:"Folder",name:"querying",route:"/developer-docs/querying",children:[{kind:"Meta",data:{"query-package":"Query package",api:"API docs",graphql:"GraphQL"}},{kind:"Folder",name:"api",route:"/developer-docs/querying/api",children:[{kind:"Meta",data:{search:"search()",fromTimestamp:"fromTimestamp()",toTimestamp:"toTimestamp()",tags:"tags()",ids:"ids()",from:"from()",to:"to()",token:"token()",minHeight:"minHeight()",maxHeight:"maxHeight()",sort:"sort()",limit:"limit()",stream:"stream()",fields:"fields()"}},{kind:"MdxPage",name:"fields",route:"/developer-docs/querying/api/fields",frontMatter:{description:"Limit fields returned when searching Irys and Arweave"}},{kind:"MdxPage",name:"from",route:"/developer-docs/querying/api/from",frontMatter:{description:"Searches by the wallet addresses used when signing and paying for the upload"}},{kind:"MdxPage",name:"fromTimestamp",route:"/developer-docs/querying/api/fromTimestamp",frontMatter:{description:"Searches Arweave based on block height"}},{kind:"MdxPage",name:"ids",route:"/developer-docs/querying/api/ids",frontMatter:{description:"Searches either by transaction ID or block ID"}},{kind:"MdxPage",name:"limit",route:"/developer-docs/querying/api/limit",frontMatter:{description:"Limits the maximum number of results returned."}},{kind:"MdxPage",name:"maxHeight",route:"/developer-docs/querying/api/maxHeight",frontMatter:{description:"Searches Arweave based on block height"}},{kind:"MdxPage",name:"minHeight",route:"/developer-docs/querying/api/minHeight",frontMatter:{description:"Searches Arweave based on block height"}},{kind:"MdxPage",name:"search",route:"/developer-docs/querying/api/search",frontMatter:{description:"Sets the search location (Irys or Arweave)."}},{kind:"MdxPage",name:"sort",route:"/developer-docs/querying/api/sort",frontMatter:{description:"Sorts search results by timestamp"}},{kind:"MdxPage",name:"stream",route:"/developer-docs/querying/api/stream",frontMatter:{description:"Returns an iterable stream that continuously yields results"}},{kind:"MdxPage",name:"tags",route:"/developer-docs/querying/api/tags",frontMatter:{description:"Searches Irys or Arweave via tags"}},{kind:"MdxPage",name:"to",route:"/developer-docs/querying/api/to",frontMatter:{description:"Searches by the wallet addresses"}},{kind:"MdxPage",name:"toTimestamp",route:"/developer-docs/querying/api/toTimestamp",frontMatter:{description:"Searches Arweave based on block height"}},{kind:"MdxPage",name:"token",route:"/developer-docs/querying/api/token",frontMatter:{description:"Searches by token used for payment"}}]},{kind:"MdxPage",name:"graphql",route:"/developer-docs/querying/graphql",frontMatter:{description:"Searching Irys using GraphQL"}},{kind:"MdxPage",name:"query-package",route:"/developer-docs/querying/query-package",frontMatter:{description:"Search Irys and Arweave with this JavaScript package"}}]},{kind:"MdxPage",name:"querying",route:"/developer-docs/querying",frontMatter:{description:"Search Irys and Arweave"}},{kind:"MdxPage",name:"tags",route:"/developer-docs/tags",frontMatter:{description:"Tagging uploads with custom metadata."}},{kind:"MdxPage",name:"using-devnet",route:"/developer-docs/using-devnet",frontMatter:{description:"Build and prototype your application on Irys' Devnet"}}]},{kind:"Folder",name:"faqs",route:"/faqs",children:[{kind:"Meta",data:{"general-faq":"General FAQ","dev-faq":"Developer FAQ"}},{kind:"MdxPage",name:"dev-faq",route:"/faqs/dev-faq",frontMatter:{description:"Frequently asked questions from our developer community."}},{kind:"MdxPage",name:"general-faq",route:"/faqs/general-faq",frontMatter:{description:"Frequently asked questions about Irys."}}]},{kind:"Folder",name:"hands-on",route:"/hands-on",children:[{kind:"Meta",data:{tutorials:"Tutorials",quests:"Quests"}},{kind:"Folder",name:"quests",route:"/hands-on/quests",children:[{kind:"Meta",data:{}}]},{kind:"MdxPage",name:"quests",route:"/hands-on/quests",frontMatter:{description:"Join a global community of over 40,000 developers building on Irys."}},{kind:"Folder",name:"tutorials",route:"/hands-on/tutorials",children:[{kind:"Meta",data:{react:"Using npx-create-react-app",cite:"Using React + Vite","irys-sdk":"Learn the Irys SDK","monitor-node-balance":"Monitor node balance","uploading-static-sites":"Upload a static website",livepeer:"Transcode video with Livepeer","irys-explorer":"Transaction explorer","gassless-uploading":"Gasless uploading","uploading-nfts":"Upload NFT assets",metaplex:"Solana NFTs with Metaplex","udl-erc20":"Manage UDL ownership with ERC20","udl-nft":"NFT licensing and UDL","dynamic-nft":"Build a dynamic NFT",lens:"Upload Lens metadata","encrypting-on-chain-data":"Encrypting on-chain data","server-side-encryption":"Encrypting data server-side","browser-based-encryption":"Encrypting data in the browser","encrypting-onchain-data":"Encrypting Onchain Data","gasless-uploading":"Gasless Uploading",vite:"Vite"}},{kind:"MdxPage",name:"browser-based-encryption",route:"/hands-on/tutorials/browser-based-encryption",frontMatter:{description:"How to encrypt data before storing onchain (browser-based edition)"}},{kind:"MdxPage",name:"dynamic-nft",route:"/hands-on/tutorials/dynamic-nft",frontMatter:{description:"Learn how to create a dynamic NFT using mutable references."}},{kind:"MdxPage",name:"encrypting-onchain-data",route:"/hands-on/tutorials/encrypting-onchain-data",frontMatter:{description:"Using Lit Protocol to encrypt on-hain data with Irys and Arweave"}},{kind:"MdxPage",name:"gasless-uploading",route:"/hands-on/tutorials/gasless-uploading",frontMatter:{description:"Using Server-Side signing to implement gasless transactions."}},{kind:"MdxPage",name:"irys-explorer",route:"/hands-on/tutorials/irys-explorer",frontMatter:{description:"Learn how to attach a UDL to an NFT"}},{kind:"MdxPage",name:"irys-sdk",route:"/hands-on/tutorials/irys-sdk",frontMatter:{description:"Everything you need to start building with Irys + NodeJS"}},{kind:"MdxPage",name:"lens",route:"/hands-on/tutorials/lens",frontMatter:{description:"Uploading Lens metadata using Irys"}},{kind:"MdxPage",name:"livepeer",route:"/hands-on/tutorials/livepeer",frontMatter:{description:"Using Livepeer to transcode video stored on Arweave"}},{kind:"MdxPage",name:"metaplex",route:"/hands-on/tutorials/metaplex",frontMatter:{description:"Build a Solana NFT Marketplace With Metaplex"}},{kind:"MdxPage",name:"monitor-node-balance",route:"/hands-on/tutorials/monitor-node-balance",frontMatter:{description:"Monitor your node balance using JavaScript, our CLI, or cURL"}},{kind:"MdxPage",name:"react",route:"/hands-on/tutorials/react",frontMatter:{description:"Using the Irys SDK with create-react-app."}},{kind:"MdxPage",name:"server-side-encryption",route:"/hands-on/tutorials/server-side-encryption",frontMatter:{description:"How to encrypt data before storing onchain (server-side edition)"}},{kind:"MdxPage",name:"udl-erc20",route:"/hands-on/tutorials/udl-erc20",frontMatter:{description:"Create an ERC20 profit-sharing token for NFTs with UDL"}},{kind:"MdxPage",name:"udl-nft",route:"/hands-on/tutorials/udl-nft",frontMatter:{description:"Learn how to attach a UDL to an NFT"}},{kind:"MdxPage",name:"uploading-nfts",route:"/hands-on/tutorials/uploading-nfts",frontMatter:{description:"How to upload NFT assets to Irys"}},{kind:"MdxPage",name:"uploading-static-sites",route:"/hands-on/tutorials/uploading-static-sites",frontMatter:{description:"How to upload a static website to the permaweb using Irys"}},{kind:"MdxPage",name:"vite",route:"/hands-on/tutorials/vite",frontMatter:{description:"Using the Irys SDK with create-react-app and Vite."}}]},{kind:"MdxPage",name:"tutorials",route:"/hands-on/tutorials",frontMatter:{description:"Roll up your sleeves and start building on Irys"}}]},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Docs",description:"Unlock the full potential of Irys’ technology with our developer resources. Start building on Irys today!"}},{kind:"Folder",name:"learn",route:"/learn",children:[{kind:"Meta",data:{"strong-provenance":"Strong provenance",bundles:"Bundles",bundling:"Bundling",receipts:"Receipts","optimistic-cache":"Optimistic cache","funding-withdrawing":"Funding & withdrawing","transaction-lifecycle":"Transaction lifecycle","irys-arweave":"Irys & Arweave","volumetric-scaling":"Volumetric scaling",udl:"UDL and builders"}},{kind:"MdxPage",name:"bundles",route:"/learn/bundles",frontMatter:{description:"Bundles are the data structure used to post data from Irys to Arweave."}},{kind:"MdxPage",name:"bundling",route:"/learn/bundling",frontMatter:{description:"Bundling helps Arweave scale"}},{kind:"MdxPage",name:"funding-withdrawing",route:"/learn/funding-withdrawing",frontMatter:{description:"Understand what happens each step of the way when transferring tokens to or from a node."}},{kind:"MdxPage",name:"irys-arweave",route:"/learn/irys-arweave",frontMatter:{description:"Irys handles 90% of all traffic on Arweave."}},{kind:"MdxPage",name:"optimistic-cache",route:"/learn/optimistic-cache",frontMatter:{description:"Optimistic caching makes your uploads instantly available"}},{kind:"MdxPage",name:"receipts",route:"/learn/receipts",frontMatter:{description:"Signed receipts provide unrefutable proof of time"}},{kind:"MdxPage",name:"strong-provenance",route:"/learn/strong-provenance",frontMatter:{description:"Data on Irys has strong provenance, it's permanent, precise and unconstrained"}},{kind:"MdxPage",name:"transaction-lifecycle",route:"/learn/transaction-lifecycle",frontMatter:{description:"Understand each step of the process as a transaction is processed by Irys."}},{kind:"MdxPage",name:"udl",route:"/learn/udl",frontMatter:{description:"UDL opportunities for builders"}},{kind:"MdxPage",name:"volumetric-scaling",route:"/learn/volumetric-scaling",frontMatter:{description:"Irys’ scaling is volumetric because it can independently scale across three vectors - writing, reading, and verification."}}]},{kind:"Folder",name:"overview",route:"/overview",children:[{kind:"Meta",data:{about:"About Irys",tools:"Tools",nodes:"Nodes",gateways:"Gateways","permanent-data":"Permanent data",ordering:"Ordering","querying-tagging":"Querying & tagging",fees:{display:"hidden",title:"Fees"},"cost-to-upload":"Cost to upload","supported-tokens":"Supported tokens"}},{kind:"MdxPage",name:"about",route:"/overview/about",frontMatter:{description:"Unlock the full potential of Irys' technology with our developer resources."}},{kind:"MdxPage",name:"cost-to-upload",route:"/overview/cost-to-upload",frontMatter:{description:"Understand our dynamic fee structure."}},{kind:"MdxPage",name:"fees",route:"/overview/fees",frontMatter:{description:"Understand our dynamic fee structure."}},{kind:"MdxPage",name:"gateways",route:"/overview/gateways",frontMatter:{description:"Gateways are responsible for indexing and serving data."}},{kind:"MdxPage",name:"nodes",route:"/overview/nodes",frontMatter:{description:"URLs for Irys' 3 nodes"}},{kind:"MdxPage",name:"ordering",route:"/overview/ordering",frontMatter:{description:"Irys enables users to instantly sequence data with extreme precision."}},{kind:"MdxPage",name:"permanent-data",route:"/overview/permanent-data",frontMatter:{description:"Permanence guarantees your data can be retrieved at any point in the future."}},{kind:"MdxPage",name:"querying-tagging",route:"/overview/querying-tagging",frontMatter:{description:"Querying and tagging combine to allow you to build semi-relational data models"}},{kind:"MdxPage",name:"supported-tokens",route:"/overview/supported-tokens",frontMatter:{description:"Pay and sign for uploads with multiple tokens."}},{kind:"MdxPage",name:"tools",route:"/overview/tools",frontMatter:{description:"Get started building with Irys today."}}]},{kind:"MdxPage",name:"terminology",route:"/terminology",frontMatter:{title:"Terminology",description:"Technical terms to help you understand Irys"}}],flexsearch:{codeblocks:!0},title:"Receipts"},pageNextRoute:"/learn/receipts",nextraLayout:a.ZP,themeConfig:o.Z};t.default=(0,i.j)(c)}},function(e){e.O(0,[3331,9482,9774,2888,179],function(){return e(e.s=68600)}),_N_E=e.O()}]);