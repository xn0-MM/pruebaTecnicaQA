const config = {
  baseUrl: process.env.BASE_URL || 'https://todomvc.com/examples/vue/',
  browser: process.env.BROWSER  || 'chrome', 
  defaultTimeout: 60 * 1000, // milliseconds
  headless: true,
  runSlow: 0, 
  pwTimeout: 40 * 1000,
  screenshotsIfFail: false,
  screenshots: true,
  screenshotsOnlyWhenFail: false,
  screenshotByStep: true,
  parallel: false,
  worker: 1,
  retry: false,
  numberOfRetrys: 1
}
  
module.exports = config;
  