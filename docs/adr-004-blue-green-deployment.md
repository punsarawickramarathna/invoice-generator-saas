# ADR-004: Blue-Green Deployment via Git Branches

## Status
Accepted

## Context
To safely test updates without breaking production.

## Decision
We use `staging` branch as the green environment and `main` as blue (live).

## Consequences
- Easy rollbacks if bugs are found in staging
- Requires clear branch management
