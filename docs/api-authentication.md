---
id: api-authentication
title: API Authentication
---

The MONEI API uses API key to authenticate requests. You can view and manage your API key in the [MONEI Dashboard](https://dashboard.monei.net/settings/api).

Test mode private keys have the prefix `pk_test_` and live mode private keys have the prefix `pk_live_`.

Your API key carries many privileges, so be sure to keep them secure! Do not share your secret API key in publicly accessible areas such as GitHub, client-side code, and so forth.

Include your API Key as an `Authorization` header in all MONEI API requests.

```shell script
curl --request GET 'https://api.monei.net/v1/payments' \
--header 'Authorization: pk_test_3c140607778e1217f56ccb8b50540e00' \
--header 'Content-Type: application/json'
```

All API requests must be made over [HTTPS](https://en.wikipedia.org/wiki/HTTP_Secure). Calls made over plain HTTP will fail. API requests without authentication will also fail.
