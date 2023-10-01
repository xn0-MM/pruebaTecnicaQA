const config = require('./config')

  function getParallelOption(isParallel, config) {
    if (isParallel) {
        return `--parallel ${config.worker}`;
    }
    return '';
  }

  const parallelOption = getParallelOption(config.parallel, config.worker)
  const cucumberConfig = {
    default: `
      --require-module ts-node/register
      --require src/**/*.steps.ts
      --require src/**/*.ts
      
      --format progress-bar 
      --format json:reports/cucumber-report.json
      --format @cucumber/pretty-formatter
      --format-options ${JSON.stringify({ snippetInterface: 'async-await' })}
      ${parallelOption}
      src/test/features/*.feature
    `
  }

}


module.exports = cucumberConfig