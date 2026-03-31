# UZ Tour Agency Platform

Production-oriented multilingual tour platform monorepo.

## Workspace

- `server/` NestJS backend API, auth, CMS domains, payment/compliance, invoicing
- `client/` Next.js public website
- `dashboard/` Next.js admin dashboard / CMS
- `packages/` shared UI primitives, config, types, and utilities
- `docs/` architecture, API, content model, and compliance notes

## Local Setup

1. Copy `.env.example` to `.env` and adjust values.
2. Start infrastructure:
   - MongoDB replica set
   - Redis
   - S3-compatible storage such as MinIO
3. Install dependencies with `pnpm install`.
4. Seed demo data with `pnpm seed`.
5. Start apps with `pnpm dev`.

## Commands

- `pnpm dev`
- `pnpm build`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm seed`

## Provider Integration Status

The platform includes a full provider abstraction layer, provider configuration CMS, payment attempts, consent logging, invoice generation, and webhook/callback boundaries.

Live provider activation still requires:

- provider-specific credentials
- exact approved API/hosted checkout requirements
- vendor webhook signing details
- KYB/KYC onboarding with each provider

The repository does not fabricate unsupported live provider calls. A local sandbox adapter is included for end-to-end local testing.

## Architecture Overview

- NestJS modular monolith on MongoDB + Redis
- Next.js App Router for public site and dashboard
- locale-prefixed public routing for `uz`, `ru`, `en`
- immutable legal policy versions
- secure cookie-based dashboard auth owned by backend
- draft/publish and signed preview support
- payment/provider-ready compliance surfaces on the public site
- CMS-managed global content entries for public UI strings
- TipTap-based rich text editing for tours, about content, and legal pages
- payment logs viewer in admin

See `docs/` for detailed documentation.

## Verification Note

This workspace is being built on a Windows host mounted into WSL over a UNC path. That environment is currently causing unreliable package-manager binary materialization and prevents trustworthy automated verification from completing end-to-end inside this session.

The repository is structured and coded for local execution, but if you run it on:

- native WSL path tooling with Node installed in WSL, or
- a standard Linux/macOS workspace path, or
- a regular Windows local filesystem path

the install/build workflow will be significantly more reliable.
