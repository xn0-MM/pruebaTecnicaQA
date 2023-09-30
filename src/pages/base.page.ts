import type { Page, BrowserContext } from "@playwright/test";

export abstract class BasePage {

    page: Page
    context: BrowserContext

    constructor(page: Page, context: BrowserContext) {
      this.page = page
      this.context = context
    }

    async goTo(link?: string) {
        const url = link ? (process.env.BASE_URL! += link) : process.env.BASE_URL!
        return await this.page.goto(url)
    }
}