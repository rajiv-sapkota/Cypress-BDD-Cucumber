const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { allureCypress } = require("allure-cypress/reporter");
const cypressOnFix = require("cypress-on-fix"); // Needed for Cucumber + Allure compatibility

require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.feature",
    env: {
      validUsername: process.env.VALID_USERNAME,
      validPassword: process.env.VALID_PASSWORD,
    },

    async setupNodeEvents(on, config) {
      
      const fixedOn = cypressOnFix(on);

      await addCucumberPreprocessorPlugin(fixedOn, config);

      fixedOn(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Initialize official Allure plugin
      allureCypress(fixedOn, config, {
        resultsDir: "allure-results",
      });

      return config;
    },
  },
});
