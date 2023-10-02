const report = require("multiple-cucumber-html-reporter")

report.generate({
  jsonDir: "./reports/",
  reportPath: "./reports/",
  displayDuration: true,
  reportName: "Prueba Técnica QA - Todo App",
  openReportInBrowser: true,
  saveCollectedJSON: true,
  reportSuiteAsScenarios: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local Testing Machine",
    platform: {
      name: "ubuntu",
      version: "16.2 ",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Prueba Técnica" },
      { label: "Release", value: "1.0.0" },
      { label: "Cycle", value: "THX1138" }
    ],
  },
});