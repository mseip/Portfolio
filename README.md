# Portfolio

![last-commit](https://img.shields.io/github/last-commit/mseip/portfolio) ![code-style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg) ![issues-closed](https://img.shields.io/github/issues-closed/mseip/portfolio)

Simple portfolio built with Vue and Typescript.

![preview](/public/assets/projects/portfolio.png)

## Setup

You can use either `npm` or `pnpm`.

```sh
# Test & Build
$ pnpm run dev
$ pnpm run build

# Lint & Format
$ pnpm run lint
$ pnpm run format
```

## Deployment

To deploy to an external server using `rsync`, you can use the deploy script found in `ext/deploy`. [direnv](https://direnv.net/) is recommended for this step.

```sh
# Edit & Source .envrc (done automatically with direnv)
$ cp .envrc.example .envrc
$ source .envrc # ONLY if direnv is not installed.

# Copy & Edit .env
$ cp .env.example .env

# Build & Deploy
$ pnpm run build && pnpm run deploy
$ pnpm run clean # optional, remove the build directory.
```

## Messages

This portfolio has a very basic messages API in `/api`. To use it, you need a server configured to use PHP. Copy and edit the configuration.

```sh
$ cp api/config.example.php api/config.php
```

Ensure `VITE_API` matches the API URL and CORS is configured correctly.

## LICENSE

[MIT](MIT)
