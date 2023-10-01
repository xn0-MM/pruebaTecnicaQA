import { Page } from "playwright/test";
import config from "../../../../config";

export const captureScreenshot = async (
    page: Page | undefined,
    pickleName: string,
    attachFunction: (img: Buffer, imgType: string) => void
): Promise<void> => {
    if (page) {
        const img: Buffer = await page.screenshot({ 
            path: `./reports/screenshots/${pickleName}.png`,
            type: "png"
        });
        attachFunction(img, "image/png");
    }
}

export const captureScreenshotByStep = async (
    page: Page | undefined,
    attachFunction: (img: Buffer, imgType: string) => void
): Promise<void> => {
    if (page && config.screenshotByStep) {
        const random = generateRandomString(10)
        const img: Buffer = await page.screenshot({ 
            path: `./reports/screenshots/${random}.png`,
            type: "png"
        });
        attachFunction(img, "image/png");
    }
}

export function splitArray(data: string): string[]{
    const arrayData = data.split(";").map(data => data.trim())
    return arrayData
}


function generateRandomString(length: number): string {
    return Array(length).fill(null).map(() => (Math.random() * 36).toString(36).charAt(0)).join('');
}
