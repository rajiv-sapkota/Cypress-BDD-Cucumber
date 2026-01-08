# Cypress BDD Automation Framework

A professional E2E testing framework utilizing **Cypress**, **Cucumber (Gherkin)**, and **Allure Reports**. This project is designed for high readability, easy maintenance, and detailed reporting.

## 🚀 Features
* **BDD Integration:** Write tests in plain English using `.feature` files.
* **Modern Preprocessing:** Uses `esbuild` for lightning-fast test execution.
* **Allure Reporting:** Detailed, visual test execution reports with screenshots on failure.
* **Environment Configuration:** Secure credential management using `dotenv`.


-

## 🛠️ Tech Stack
* **Core:** [Cypress](https://www.cypress.io/)
* **BDD:** [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
* **Reporter:** [allure-cypress](https://www.npmjs.com/package/allure-cypress)
* **Bundler:** [@bahmutov/cypress-esbuild-preprocessor](https://github.com/bahmutov/cypress-esbuild-preprocessor)

---

## 📋 Prerequisites
Before you begin, ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* [Java JRE/JDK](https://www.oracle.com/java/technologies/downloads/) (Required for Allure to generate reports)



## ⚙️ Setup & Installation

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/cypress-bdd-cucumber.git
    cd cypress-bdd-cucumber
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the project root and add your credentials (this file is ignored by Git):
    ```env
    BASE_URL="https://www.saucedemo.com"
    VALID_USERNAME="standard_user"
    VALID_PASSWORD="secret_sauce"
    ```

## 🏃 Running Tests

| Command | Action |
| :--- | :--- |
| `npm run cy:open` | Opens the Cypress Runner (Interactive Mode) |
| `npm run test` | Runs all tests in Headless Mode |
| `npm run allure:run` | **(Recommended)** Runs tests + Generates Allure Report + Opens Report |


```bash
 .github/workflows/        # CI/CD pipeline configuration
| cypress/
│   ├── e2e/                  # Feature files, step definitions, utils and POM
│   │   ├── login/
│   │   ├── products/
│   │   └── utils/            # Utility functions used across test cases
├── pages/                     # POM (Page Object Model)
│   ├── support/               # Global configuration, commands, hooks
│   └── fixtures/              # Test data
├── .env                       # Private credentials
├── .gitignore                 # Files excluded from Git
├── cypress.config.js          # Main Cypress configuration 
└── package.json               # Project dependencies and npm scripts
```


| Script                  | Description                                                             |
| ----------------------- | ----------------------------------------------------------------------- |
| `npm run cy:open`       | Opens Cypress Test Runner (Interactive Mode)                            |
| `npm run test`          | Runs all tests in Headless Mode                                         |
| `npm run allure:run`    | Runs all tests, generates Allure report, and opens report automatically |


## 🏃 Recommended Test
| `npm run allure:run`    | Clears previous reports, Runs all tests, Generates Allure report, and Opens report automatically in default browser |




📊 Viewing Reports
After running npm run allure:run, the Allure report will automatically open in your default browser.

Failures: Screenshots are automatically attached to failed test steps.

Steps: Every Gherkin Given, When, Then step is logged individually.
