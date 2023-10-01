import { When, Then } from '@cucumber/cucumber'
import { ICustomWorld } from '../../support/worlds/world'
import { expect } from 'chai'
import { captureScreenshotByStep, splitArray} from '../../support/helpers/utils/utils'


When('hace click en el botón Mark all as completed', async function (this: ICustomWorld) {
   await this.pom?.homePage.markAllCompletedButton.click()
   await captureScreenshotByStep(this.page, this.attach)
});

Then('deberían aparecer las tareas {string} marcadas', async function (this: ICustomWorld, tareas: string) {
   const tareasCompletadas = await this.pom?.homePage.getArrayTareasCompletadas()
   const arrayTareasCompletadas: string[] = splitArray(tareas)
   
   expect(tareasCompletadas).to.have.members(arrayTareasCompletadas)
   await captureScreenshotByStep(this.page, this.attach)
});

Then('deberían aparecer {int} tareas marcadas', async function (this: ICustomWorld, numExpectTareas: number) {
   expect(await this.pom?.homePage.getNumberOfTareasCompletadas()).to.eql(numExpectTareas)
   await captureScreenshotByStep(this.page, this.attach)
});
