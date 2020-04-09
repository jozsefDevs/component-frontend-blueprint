# component-frontend-blueprint

This project was bootstrapped with [ci-cd-frontend-blueprint](https://github.com/jozsefDevs/ci-cd-frontend-blueprint).

## Structure
This repo was built with step-by-step commits, so if you read through `CHANGELOG.md` (on `master` branch) each
commit describing a new feature, so it should be easy to reproduce. 

## Features 🚀
- The main aim of this project to provide a kick-starter template for creating React based *libraries*. It's *NOT* using
Create React App, because it's an exploded setup. Feel free to modify according to your needs. 

- Build process ⚙️:

  * Babel + Webpack in charge for building the lib.
  * TypeScript also introduced via Babel (kudos to [this article](https://iamturns.com/typescript-babel/))
  * `tsc` is also there to provide auto-generated declarations (`*.d.ts` files) to the build

- [Storybook](https://storybook.js.org/) to have a nice preview of what components we're having in our lib.

- CI/CD workflows via [Github Actions](https://github.com/features/actions)

  * [Semantic release](https://www.npmjs.com/package/semantic-release) is ensuring every time a `develop -> master` merge
    happens we auto-generate a `CHANGELOG.md` and also updating the `package.json` with the correct version number. 
  * For each `master` release an npm package published to [Github Packages](https://github.com/features/packages)

- Continous delivery to [Surge.sh](https://surge.sh) platform for Storybook live previews 

  * develop -> [component-frontend-blueprint-staging.surge.sh](http://component-frontend-blueprint-staging.surge.sh)
  * master -> [component-frontend-blueprint.surge.sh](http://component-frontend-blueprint.surge.sh)

- Quality gates are ensured through 

  * [Commitlint](https://commitlint.js.org/#/) to ensure consistent commit messages (also supporting Sem. Ver.)
  * [Eslint](https://eslint.org/blog) to support linting TypeScript files. Why eslint? [See here](https://eslint.org/blog/2019/01/future-typescript-eslint#top)
  * [Prettier](https://prettier.io/) to auto-format through a pre-commit hook so we can avoid debates on code styling :)
