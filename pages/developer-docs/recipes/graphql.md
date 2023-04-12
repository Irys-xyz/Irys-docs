---
sidebar_position: 6
sidebar_label: Querying Arweave With GraphQL
description: You'll Learn - Using GraphQL to query Arweave
slug: /recipes/graphql
---

# Querying Arweave With GraphQL

Metadata stored on Arweave can be queried using GraphQL. This includes both metadata that is automatically stored for each transaction and [custom metadata you design yourself using our tags feature.](/sdk/tags)

:::note
If you're new to GraphQL, you may find it easier to start with [this step-by-step tutorial](/tutorials/graphql-explorer). This recipe assumes readers already have a basic understanding of what GraphQL is and how it's used.
:::

## Use Cases

Common use cases include, but are not limited to:

- Tagging uploads with a custom app name and then querying for those uploads based on app name.
- Searching for uploads of a particular MIME type.
- Building decentralized social dApps where you need to build a relational model of posts and accompanying likes.

## Endpoints

There are two Arweave official endpoints you can use for your GraphQl queries.

- https://arweave.net/graphql
- https://arweave.dev/graphql

There is also another endpoint from Goldsky which offers fast response times.

- https://arweave-search.goldsky.com/graphql

Clicking either endpoint URL will take you to an interactive playground where you can test your queries. When using the playgrounds, pressing control-space opens a popup query builder to aid in rapidly building queries.

## Schema

A query response is compromised of edges, within those edges are nodes and within those nodes is the transaction data.

The following is the full GraphQL structure. In most scenarios, you won't need the entire object; however, if you do want the entire metadata of Arweave transactions, you may retrieve it with the following query.

```graphql
query {
  transactions {
    cursor
    edges {
      node {
        id
        anchor
        signature
        recipient
        owner {
          address
          key
        }
        fee {
          winston
          ar
        }
        quantity {
          winston
          ar
        }
        data {
          size
          type
        }
        tags {
          name
          value
        }
        block {
          id
          timestamp
          height
          previous
        }
        parent {
          id
        }
      }
    }
  }
}
```

## Anatomy Of A Query

A GraphQL query is made up of two parts, you first define your search criteria and then define the fields you want returned. This is a powerful format that allows you to streamline your dApp's performance by only transferring data you actually need.

```graphql
query {<schema type>( <what you're searching for> ) { <what you want out> }
```

A real-world example showing how to query for the 10 most recent PNGs posted to Arweave is as follows.

![](/img/tutorials/graphql-explorer/anatomy-of-query.png)

## Max Results / Pagination

You can request a maximum of 100 results returned from each query (using the parameter `first`), to obtain additional results you must use pagination.

When using pagination you must:

1. Always retrieve the `cursor`, this acts like a bookmark in the search results that you can instantly return to.
2. Specify the number of results to return.
3. Use saved `cursor` values to obtain subsequent search results.

The following query searches for all transactions and returns the 100 results occurring after cursor id `WyIyMDIwLTA5LTIzVDE2OjQ0OjE0LjY5MloiLDFd`. To then obtain the next 100 results, you would repeat the same query while updating the cursor id with the last value returned from the current set.

```graphql
query {
  transactions(first: 100, after: "WyIyMDIwLTA5LTIzVDE2OjQ0OjE0LjY5MloiLDFd") {
    edges {
      cursor
      node {
        id
      }
    }
  }
}
```

## GraphQL clients

You can make your queries directly using any HTTP library like fetch or axios. You can also use specialized clients like [Apollo Client](https://www.apollographql.com/) or [urql.](https://formidable.com/open-source/urql/)

## Sample Queries

Queries return transaction **metadata.** To then retrieve data, you need to use the returned transaction id and download the data using an URL formed as follows.

`https://arweave.net/[transaction-id]`

### Transaction ID

You may retrieve one or more transactions by specifying their IDs in an array.

```graphql
query {
  transactions(ids: ["G-1t0Lqysin897HC3IV8xu_Mr884B-Mo5YEnlhUH54k"]) {
    edges {
      node {
        id
      }
    }
  }
}
```

### Recipients

You may retrieve one or more recipients by specifying their addresses in an array.

```graphql
query {
  transactions(recipients: ["M6w588ZkR8SVFdPkNXdBy4sqbMN0Y3F8ZJUWm2WCm8M"]) {
    edges {
      node {
        id
      }
    }
  }
}
```

### Owners

You can retrieve one or more owners by specifying their addresses in an array.

```graphql
query {
  transactions(owners: ["M6w588ZkR8SVFdPkNXdBy4sqbMN0Y3F8ZJUWm2WCm8M"]) {
    edges {
      node {
        id
      }
    }
  }
}
```

### Tags

You can search for transactions based on tag name / value pairs.

```graphql
query {
  transactions(tags: { name: "Content-Type", values: ["text/html"] }) {
    edges {
      node {
        id
      }
    }
  }
}
```

Use the following format when specifying multiple tags.

```graphql
query {
  transactions(
    tags: [
      { name: "Content-Type", values: ["text/html"] }
      { name: "User-Agent", values: ["ArweaveAutoDPL/0.1"] }
    ]
  ) {
    edges {
      node {
        id
      }
    }
  }
}
```

## Additional Information

Additional information may be found [in this guide.](https://gql-guide.vercel.app/)
