const config = require('./config')
  
  const parallelOption = getParallelOption(config.parallel, config.worker)
  const retryOption = getRetryOption(config.retry, config.numberOfRetrys)

  const cucumberConfig = {
    default: `
      --require-module ts-node/register
      --require src/**/*.steps.ts
      --require src/**/*.ts
      
      --format progress-bar 
      --format json:reports/cucumber-report.json
      --format @cucumber/pretty-formatter
      --format rerun:@rerun.txt
      --format-options ${JSON.stringify({ snippetInterface: 'async-await' })}
      src/test/features/*.feature
      ${parallelOption}
      ${retryOption}
    `,
    rerun: `
      --require-module ts-node/register
      --require src/**/*.steps.ts
      --require src/**/*.ts
      --format progress-bar 
      --format json:reports/cucumber-report.json
      --format @cucumber/pretty-formatter
      --format-options ${JSON.stringify({ snippetInterface: 'async-await' })}
      ${parallelOption}
  `
  }

  function getParallelOption(isParallel, config) {
    if (isParallel) {
        return `--parallel ${config}`;
    }
    return '';
  }

  function getRetryOption(isRetryActive, config) {
    if (isRetryActive) {
        return `--retry ${config}`;
    }
    return '';
  }

module.exports = cucumberConfig