const config = {
  baseUrl: 'https://todomvc.com/examples/vue/',
  browser: 'chrome', 
  defaultTimeout: 60 * 1000, // milliseconds
  headless: true,
  runSlow: 0, 
  pwTimeout: 40 * 1000,
  screenshotsIfFail: false,
  worker: 1,
  screenshotByStep: true,
  parallel: false
}
  
module.exports = config;
  