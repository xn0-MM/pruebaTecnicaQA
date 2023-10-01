import { When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../../support/worlds/world';
import { expect } from 'chai'
import { captureScreenshotByStep, splitArray} from '../../support/helpers/utils/utils'


When('el usuario hace click en el botón Active', async function (this: ICustomWorld) {
    await this.pom?.homePage.activeButton.click()
    await captureScreenshotByStep(this.page, this.attach)
})

When('el usuario hace click en el botón Completed', async function (this: ICustomWorld) {
    await this.pom?.homePage.completedButton.click()
    await captureScreenshotByStep(this.page, this.attach)
});

When('hace click en el botón All', async function (this: ICustomWorld) {
    await this.pom?.homePage.allButton.click()
    await captureScreenshotByStep(this.page, this.attach)
});

Then('deberían aparecer las tareas {string}', async function (this: ICustomWorld, tareas: string) {
    const arrayTareas: string[] = splitArray(tareas)
    const tareasFiltradas = await this.pom?.homePage.getArrayTareas()

    expect(tareasFiltradas).to.eql(arrayTareas)
    await captureScreenshotByStep(this.page, this.attach)
})



