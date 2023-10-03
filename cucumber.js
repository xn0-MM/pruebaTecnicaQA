const config = require('./config')

const common = {
  requireModule: ['ts-node/register'],
  require: ['src/test/steps/*.steps.ts', 'src/**/*.ts'], 
  formatOptions: { snippetInterface: 'async-await', colorsEnabled: true}
}
      
module.exports = {
  default: {
    ...common,
    paths: ['src/test/features'],
    backtrace: true, 
    retry: config.retrys,
    parallel: config.workers,
    format: ['@cucumber/pretty-formatter',
    'json:reports/cucumber-report.json',
    'rerun:@rerun.txt'
   ]
  },
  rerun: {
    ...common,
    backtrace: true, 
    retry: config.retrys,
    parallel: config.workers,
    format: ['@cucumber/pretty-formatter'],
  },
  runCI: {
    ...common,
    paths: ['src/test/features'],
    backtrace: false, 
    retry: 2,
    parallel: 0,
    format: ['@cucumber/pretty-formatter',
    'json:reports/cucumber-report.json'
   ]
  }
}