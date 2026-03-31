# Security Assumptions

## Auth Model

- dashboard authentication is owned by the NestJS server
- cookies are intended to be `HttpOnly`, secure in production, and scoped by environment configuration
- mutating dashboard requests should carry CSRF protection tokens

## Sensitive Logging

Payment attempts, consent logs, and contact submissions are designed to store:

- `ipHash` for indexed/searchable correlation
- `ipEncrypted` for privileged forensic review

Raw access to decrypted IP values must be limited to highly privileged operational roles.

## Provider Credentials

- provider credentials must be injected from environment variables or secret management
- the repository never stores provider secrets in seeded database records
- dashboard views should display config state and public metadata, not raw credentials

## Legal and Compliance Governance

- public legal/payment copy must remain editable outside source code for future production hardening
- published legal versions must remain immutable after release
- consent records must reference exact published policy versions
