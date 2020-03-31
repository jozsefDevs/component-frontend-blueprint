# ci-cd-frontend-blueprint

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Thus you can use 
the usual scripts. However this repo rather focuses on the CI/CD set up, having a changelog generated, etc.

## Structure
This repo was built with step-by-step commits, so if you read through `CHANGELOG.md` (on `master` branch) each
commit describing a new feature, so it should be easy to reproduce. 

## Features 🚀
- A [Create React App](https://github.com/facebook/create-react-app) project is inside the src/ but that should be 
replaced by any type of FE project. So this is optional, just there to be able to build the project.
- [Commitlint](https://commitlint.js.org/#/) is ensuring that every commit msg. follows the same conventions
- [Semantic release](https://www.npmjs.com/package/semantic-release) is ensuring every time a `develop -> master` merge
happens we auto-generate a `CHANGELOG.md` and also updating the `package.json` with the correct version number. 
- [Github Actions](https://github.com/features/actions) used for simplified install + build + test stages on `develop`
and `master` branches.
- [Surge.sh](https://surge.sh) used for quick and hassle-free deployment for the frontend project

## GitFlow automated
- The repo following `develop` and `master` branch conventions [defined here](https://nvie.com/posts/a-successful-git-branching-model/#the-main-branches)
and absolutely resonates with the following ideas:
> When the source code in the develop branch reaches a stable point and is ready to be released, all of the changes should be merged back into master somehow and then tagged with a release number. How this is done in detail will be discussed further on.

> Therefore, each time when changes are merged back into master, this is a new production release by definition. We tend to be very strict at this, so that theoretically, we could use a Git hook script to automatically build and roll-out our software to our production servers everytime there was a commit on master.

So this is exactly what this repo is about, to implement the mentioned steps 