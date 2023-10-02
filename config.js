const config = {
  baseUrl: process.env.BASE_URL || 'https://todomvc.com/examples/vue/',
  browser: process.env.BROWSER  || 'chrome', 
  headless: true,
  runSlow: 0, 
  defaultTimeout: 60 * 1000,
  pwTimeout: 40 * 1000,
  screenshots: true,
  screenshotsOnlyWhenFail: false,
  screenshotByStep: true,
  parallel: false,
  worker: 1,
  retry: false,
  numberOfRetrys: 1
}
  
module.exports = config;
  