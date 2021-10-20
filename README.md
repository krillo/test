# Förena Boilerplate

This repository contains a boilerplate microfrontend for Förena. Follow the instructions to create you own micro frontend,

## GIT

- clone this repository

```bash
git clone git@github.com:icomdev/forena-boilerplate.git
```

- rename the directory to match your project name
- change to your remote GIT repository
- and push it

```bash
git remote set-url origin git@github.com:icomdev/forena-xxxxx.git
git push -u origin main
```

## Name and port

Some config files need to be edited to match your project name and the agreed upon port for your app. Change `boilerplate` and `3301`

- `package.json`

  ```
  "name": "@forena/boilerplate",
  "scripts": {
      "start": "webpack serve --port 3301",
      :
      :
  ```

- `webpack.config.js`
  ```
  module.exports = forenaWebpackConfig({
  name: 'boilerplate',
  });
  ```
- `azure-pipelines.yml`
  ```
  resources:
    repositories:
    - repository: boilerplate # The name used to reference this repository in the checkout step
      type: github
      endpoint: icomdev
      name: icomdev/boilerplate
      :
      :
  ```

## "boilerplate" in the source code

Thera are some templating in the source code as well.
Do a full project search for "boilerplate" to get to know the code.

## Install dependencies.

```bash
yarn install --force
```

Start the development server.

```bash
yarn start
```

The app can be accessed at [http://localhost:3301](http://localhost:3301) or your new port.

## Coding Guidelines

Before starting development read the [coding guidelines](https://github.com/icomdev/forena#coding-guidelines).
