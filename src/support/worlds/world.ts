import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { BrowserContext, Page, PlaywrightTestOptions } from '@playwright/test';
import { Pom } from '../../pages/pom';


export interface ICustomWorld extends World {
  context?: BrowserContext
  page?: Page
  pom?: Pom

  playwrightOptions?: PlaywrightTestOptions;
}

export class CustomWorld extends World implements ICustomWorld {
  constructor(options: IWorldOptions) {
    super(options)
  }
}

setWorldConstructor(CustomWorld);