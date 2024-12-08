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
# Edit & source .envrc (done automatically with direnv)
$ cp .envrc.example .envrc
$ source .envrc # ONLY if direnv is not installed.

# Build and deploy
$ pnpm run build && pnpm run deploy
$ pnpm run clean # optional, remove the build directory.
```

## LICENSE

[MIT](MIT)
