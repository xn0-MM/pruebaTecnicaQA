
import { After, AfterAll, Before, BeforeAll, setDefaultTimeout, Status } from "@cucumber/cucumber"
import { Browser} from "playwright"
import { ICustomWorld } from "../worlds/world"
import { Pom } from "../../pages/pom"
import { getEnv } from "../helpers/env/env";
import { browserManager } from "../helpers/browsers/browserManager";
import config from '../../../config';
import { captureScreenshot } from "../helpers/utils/utils";  

  setDefaultTimeout(config.defaultTimeout)
  
  let browser: Browser;
  
  BeforeAll(async function () {
    getEnv()
    browser = await browserManager()
  })
  
  Before(async function (this: ICustomWorld) {
    this.context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
    });

    this.page = await this.context.newPage();
    this.pom = new Pom(this.page, this.context)
  });
  
  After(async function (this: ICustomWorld , {pickle, result}) {

    if (!config.screenshotByStep) {
      if (config.screenshotsIfFail && result?.status === Status.FAILED) {
          await captureScreenshot(this.page, pickle.name, this.attach);
      } else if (!config.screenshotsIfFail) {
          await captureScreenshot(this.page, pickle.name, this.attach);
      }
  }

    await this.context?.close()
    await this.page?.close()
  });
  
  AfterAll(async function () {
    await browser.close()
  });