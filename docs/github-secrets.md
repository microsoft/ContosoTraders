# Github secrets required

On the github repository, go to the `Settings` tab > `Secrets` > `Actions` and create these necessary secrets:

| Secret Name        | Secret Value                                                                   |
| ------------------ | ------------------------------------------------------------------------------ |
| `ENVIRONMENT`      | A unique environment name (max 6 characters, alphanumeric only). E.g. 'test51' |
| `SQL_PASSWORD`     | A password which will be set on all SQL Azure DBs                              |
| `SERVICEPRINCIPAL` | See details below                                                              |

The value of the `SERVICEPRINCIPAL` secret above needs to have the following format:

```json
{
  "clientId": "zzzzzzzz-zzzz-zzzz-zzzz-zzzzzzzzzzzz",
  "clientSecret": "your-client-secret",
  "tenantId": "zzzzzzzz-zzzz-zzzz-zzzz-zzzzzzzzzzzz",
  "subscriptionId": "zzzzzzzz-zzzz-zzzz-zzzz-zzzzzzzzzzzz"
}
```
