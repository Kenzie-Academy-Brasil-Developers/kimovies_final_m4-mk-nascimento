#!/usr/bin/env bash
# exit on error
set -o errexit

pnpm i
pnpm build
pnpm typeorm migration:run -d dist/data-source
