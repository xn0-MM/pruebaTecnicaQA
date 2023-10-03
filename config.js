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
  workers: 0,
  retrys: 0, 
  viewport: { width: 1920, height: 1080 },
}
  
module.exports = config;
  