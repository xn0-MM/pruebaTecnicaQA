const config = require('./config')

const common = {
  requireModule: ['ts-node/register'],
  require: ['src/test/steps/*.steps.ts', 'src/**/*.ts'], 
  paths: ['src/test/features'],

  formatOptions: { snippetInterface: 'async-await' },
 
}
      
module.exports = {
  default: {
    ...common,
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
    backtrace: true, 
    retry: 0,
    parallel: 0,
    format: ['@cucumber/pretty-formatter',
    'json:reports/cucumber-report.json',
    'rerun:@rerun.txt'
   ],
  },
  rerunCI: {
    ...common,
    backtrace: true, 
    retry: 2,
    parallel: 0,
    format: ['@cucumber/pretty-formatter',
    'json:reports/cucumber-report.json'
   ]
  }
}