# Payment and Compliance Model

## Public Surfaces

- payment page
- payment success page
- payment failed page
- terms
- privacy
- payment refund policy
- payment compliance notice
- supported countries

## Logging

Server-side records:

- payment attempts
- consent logs
- payment transactions
- invoice records
- normalized `logs` records for operational review in admin

Sensitive request metadata stores both:

- `ipHash` for searchable matching
- `ipEncrypted` for privileged forensic review

## Transparency Rules

- merchant-side CTA remains card-first
- third-party payment processing is disclosed publicly
- possible internal crypto infrastructure use by providers is disclosed publicly
- KYC, restrictions, and non-refundable scenarios are disclosed on merchant pages
