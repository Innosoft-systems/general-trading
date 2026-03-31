# Provider Adapter Strategy

The server defines a provider adapter contract for:

- `canHandle(context)`
- `createCheckoutSession(context)`
- `verifyWebhookSignature(request)`
- `normalizeWebhookEvent(payload)`
- `parseReturnCallback(queryOrBody)`
- `getPublicMeta()`

Implemented provider keys:

- `onramper`
- `guardarian`
- `alchemypay`
- `wert`
- `paybis`
- `itez`
- `manual_sandbox` for local testing only

Only `manual_sandbox` performs full local checkout simulation in the repository by default. Live providers remain config-ready and require real onboarding data.
