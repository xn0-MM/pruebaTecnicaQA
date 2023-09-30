const config = {
    baseUrl: process.env.BASE_URL,
    browser: process.env.BROWSER || 'chrome', 
    defaultTimeout: 60 * 1000, // milliseconds
    headless: true,
    runSlow: 0, // milliseconds
  };
  
  export default config;
  