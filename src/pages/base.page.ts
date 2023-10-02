import type { Page, BrowserContext } from "@playwright/test";
import config from "../../config";

export abstract class BasePage {
    page: Page
    context: BrowserContext

    constructor(page: Page, context: BrowserContext) {
      this.page = page
      this.context = context
    }

    async goTo(link?: string) {
        const url = link ? (config.baseUrl += link) : config.baseUrl
        return await this.page.goto(url)
    }
}