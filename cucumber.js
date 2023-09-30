const config = require('./config')

const cucumberConfig = {
  default: `
    --require-module ts-node/register
    --require src/**/*.steps.ts
    --require src/**/*.ts
    
    --format progress-bar 
    --format json:reports/cucumber-report.json
    --format @cucumber/pretty-formatter
    --format-options ${JSON.stringify({ snippetInterface: 'async-await' })}
    --parallel ${config.worker}
    src/test/features/*.feature
  `
}

module.exports = cucumberConfig