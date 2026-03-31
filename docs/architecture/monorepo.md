# Monorepo Structure

This workspace uses pnpm workspaces with three primary applications and shared packages.

## Apps

- `server`: NestJS backend and source of truth for content, auth, payments, invoices, and audit logs
- `client`: public multilingual website
- `dashboard`: internal admin CMS and operations console

## Shared Packages

- `packages/ui`: reusable UI primitives and design tokens
- `packages/types`: shared interfaces and enums safe for cross-app use
- `packages/utils`: formatting, locale, and money helpers
- `packages/config`: environment schemas and route constants

## Boundary Rules

- business logic stays in `server`
- frontends only consume API contracts and shared pure utilities/types
- legal/payment content is governed separately from marketing content
