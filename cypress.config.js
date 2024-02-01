const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : "http://103.106.20.186:9007/micaqc/login",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
