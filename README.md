# gridsome-plugin-stylelint

> Stylelint plugin for Gridsome

## Requirements

You need to ensure that you have `stylelint` installed:

```bash
# npm
npm install --save-dev stylelint

# yarn
yarn add --dev stylelint
```

## Setup

1. Add `gridsome-plugin-stylelint` dependency to your project.

```bash
# npm
npm install --save-dev gridsome-plugin-stylelint

# yarn
yarn add --dev gridsome-plugin-stylelint
```

2. Add `gridsome-plugin-stylelint` to the `plugins` section of `gridsome.config.js`

```js
module.exports = {
  plugins: [
    {
      use: "gridsome-plugin-stylelint",
      options: {
        // All stylelint-webpack-plugin options
      },
    },
  ],
};
```

## Options

`gridsome-plugin-stylelint` is a wrapper around [`stylelint-webpack-plugin`](https://github.com/webpack-contrib/stylelint-webpack-plugin#options). All of the options & their defaults are directly mapped on and from [`stylelint-webpack-plugin`](https://github.com/webpack-contrib/stylelint-webpack-plugin#options), with the exception of the following:

### `context`

- Type: `String`
- Default: `/src`

### `files`

- Type: `String|Array[String]`
* Default: `"**/*.{s?(a|c)ss,less,stylus,vue}"`
