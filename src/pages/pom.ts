import { HomePage } from './home.page';
import { Page, BrowserContext } from '@playwright/test';

export class Pom {
  homePage: HomePage

  constructor(public page: Page, public context: BrowserContext) {
    this.homePage = new HomePage(page, context);
  }
}