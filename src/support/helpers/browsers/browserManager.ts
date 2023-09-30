import { LaunchOptions, chromium, firefox, webkit } from "playwright-core";
import * as config from '../../../../config';

const options: LaunchOptions = {
    headless: config.headless,
    slowMo: config.runSlow, 
    timeout: config.pwTimeout
}

export const browserManager = () => {
    const browserType = config.browser || "chrome";
    switch (browserType) {
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);
        default:
            throw new Error("Debes especificar un navegador: chrome, firefox o webkit")
    }
}