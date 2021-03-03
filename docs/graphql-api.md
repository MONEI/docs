---
id: graphql-api
title: GraphQL API
description: With MONEI GraphQL API you have full access to all MONEI features.
---

With MONEI GraphQL API you have full access to all MONEI features like analytics reports, payments, events and much more. This API requires authentication and is intended to be used server side.

If you want to know how GraphQL API works, check out [How to GraphQL](https://www.howtographql.com/).

If you don't have a MONEI account already, you’ll need to [create](https://dashboard.monei.com/?action=signUp) one in order to use the GraphQL API.

## GraphQL API Explorer

If you want to start playing with the API immediately, you can do it in the [GraphQL API Explorer](https://dashboard.monei.com/api-explorer) of your MONEI account. You can run Queries and Mutations in the explorer to have and idea about what the MONEI GraphQL API can offer you. The API Explorer is available to all the MONEI users.

:::note
**Heads up!** MONEI's GraphQL Explorer makes use of your real, live, production data.
:::

## Authentication

The API uses API keys to authenticate requests. You can view and manage your API key in the [MONEI Dashboard → Settings → API Access](https://dashboard.monei.com/settings/api).

Your API key full access to all MONEI resources, so be sure to keep it secure! Do not share your secret API key in publicly accessible areas such as GitHub, client-side code, and so forth.

Include your API Key as an `Authorization` header in all your GraphQL requests.

## GraphQL API Endpoint

```shell script
POST https://graphql.monei.com
```

## Query GraphQL API

You can access GraphQL API endpoint using cURL or any other HTTP client.

```shell script
curl --request POST 'https://graphql.monei.com' \
--header 'Authorization: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"account {name status}"}'
```

:::note
You can explore GraphQL API Queries and Mutations in the interactive [GraphQL API Explorer](https://dashboard.monei.com/api-explorer) in you MONEI Dashboard.
:::

## Example Queries

In GraphQL, queries are the equivalent of REST’s GET action verb. Even though a POST is being sent to the GraphQL endpoint, if the body only contains queries, data will only be retrieved and not modified.

#### Query the Contact by Address

```graphql
query {
  charge(id: "bc8eb8588e175ce4c957212f17ca051a") {
    amount
    refundedAmount
    authorizationCode
    id
    description
    customer {
      email
      name
      phone
    }
    orderId
    paymentMethod {
      bank
      brand
      country
      last4
      method
      phoneNumber
      threeDSecure
      type
    }
    status
    statusCode
    statusMessage
    updatedAt
  }
}
```

## Example Mutations

Mutations are the equivalent of REST’s data-modifying action verbs.

```graphql
mutation {
  refundCharge(input: {chargeId: "bc8eb8588e175ce4c957212f17ca051a", amount: 10}) {
    amount
    refundedAmount
    authorizationCode
    id
    description
    customer {
      email
      name
      phone
    }
    orderId
    paymentMethod {
      bank
      brand
      country
      last4
      method
      phoneNumber
      threeDSecure
      type
    }
    status
    statusCode
    statusMessage
    updatedAt
  }
}
```
