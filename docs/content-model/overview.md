# Content Model Overview

Localized public content uses fixed object fields for `uz`, `ru`, and `en`.

## Draft and Publish

- hero slides, home sections, tours, pages, and payment page content support draft and published states
- legal policy versions become immutable after publish
- public rendering only uses published content unless a valid preview token is supplied

## Editorial Governance

- marketing content: hero, home, tours, gallery, about, contact display text
- legal/compliance content: policies, payment disclosures, supported countries
- payment operations content: provider registry, payment settings, mappings, consent text

## Global Content Entries

The platform also uses `contentEntries` for public UI strings that are not tied to a single page document.

Examples:

- header navigation labels
- footer labels and descriptions
- payment result labels
- tours filter labels
- contact form placeholders

This keeps the public site free of hardcoded customer-facing copy.
