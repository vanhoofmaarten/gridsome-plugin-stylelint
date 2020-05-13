function moduleExists(name) {
  try {
    return require.resolve(name);
  } catch (e) {
    return false;
  }
}

function GridsomeStylelintPlugin(api, options) {
  if (!moduleExists("stylelint")) {
    console.warn(
      "The dependency `stylelint` not found.",
      "Please run `yarn add stylelint --dev` or `npm install stylelint --save-dev`"
    );
    return;
  }

  api.configureWebpack((config) => {
    const StylelintPlugin = require("stylelint-webpack-plugin");
    config.plugins.push(new StylelintPlugin(options));
  });
}

GridsomeStylelintPlugin.defaultOptions = () => ({
  context: "./src",
  files: ["**/*.{s?(a|c)ss,less,stylus,vue}"],
});

module.exports = GridsomeStylelintPlugin;
