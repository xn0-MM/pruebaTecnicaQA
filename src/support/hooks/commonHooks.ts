
import { After, AfterAll, Before, BeforeAll, setDefaultTimeout, Status } from "@cucumber/cucumber"
import { Browser} from "playwright"
import { ICustomWorld } from "../worlds/world"
import { Pom } from "../../pages/pom"
import { getEnv } from "../helpers/env/env";
import { browserManager } from "../helpers/browsers/browserManager";
import config from '../../../config';
  
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

    let img: Buffer
    
    if (result?.status == Status.FAILED) {
        img = await this.page?.screenshot({ path: `./reports/screenshots/${pickle.name}.png`, type: "png" })!
        this.attach( img, "image/png")
    }

    await this.context?.close()
    await this.page?.close()
  });
  
  AfterAll(async function () {
    await browser.close()
  });