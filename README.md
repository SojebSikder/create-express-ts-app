

<div align="center">

[![npm-image]][npm-url] ![][typescript-image] [![license-image]][license-url] [![synk-image]][synk-url]![issue]





</div>

<br />

# create-sojeb-express-ts-app

Boilerplate to create a new Express typescript project

Note: I didn't focus on front-end much.

## Creating a new app

```
npx create-sojeb-express-ts-app hello-world
```

# Contribute

---

If you want to contribute clone the repo
(https://github.com/SojebSikder/create-express-ts-app), create new branch and make pull request.
After clone the repo follow:

## Installing

```
yarn install
```

## Setup

- Copy .env.example to .env And set up database credentials in env file
- run this command for database migration:
  `npx prisma db push`
- Migrate database using this command:
  `npx prisma migrate dev`

## Running

```
ts-node app.ts
```

## For development

Run this command

```
yarn watch
```

Or Install nodemon globally

```
yarn global add nodemon
```

Then run using this nodemon

```
nodemon app.ts
```

## Technology used

- Typescript
- Nodejs
- Express
- Prisma
- Mysql

## For help and support

Email: sojebsikder@gmail.com

## Issue

If you find any problem please create an issue.


[npm-image]: https://img.shields.io/npm/v/create-sojeb-express-ts-app/latest.svg?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/package/create-sojeb-express-ts-app "npm"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript

[license-url]: LICENSE.md
[license-image]: https://img.shields.io/github/license/SojebSikder/create-sojeb-express-ts-app?style=for-the-badge

[synk-image]: https://img.shields.io/snyk/vulnerabilities/github/SojebSikder/create-sojeb-express-ts-app?label=Synk%20Vulnerabilities&style=for-the-badge
[synk-url]: https://snyk.io/test/github/SojebSikder/create-sojeb-express-ts-app?targetFile=package.json "synk"

[issue]: https://img.shields.io/github/issues/SojebSikder/create-sojeb-express-ts-app