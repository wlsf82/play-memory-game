const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1280,
  viewportWidth: 1520,
  e2e: {
    fixturesFolder: false,
  },
});
