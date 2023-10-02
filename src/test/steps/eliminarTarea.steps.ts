import { When, Then } from '@cucumber/cucumber'
import { ICustomWorld } from '../../support/worlds/world'
import { expect } from 'chai'
import { captureScreenshotByStep, splitArray} from '../../support/helpers/utils/utils'


When('el usuario pulsa el botón para eliminar la tarea: {string}', async function (this: ICustomWorld, tareas: string) {
    const arrayTareas = splitArray(tareas)

    for(const tarea of arrayTareas){
        await this.pom?.homePage.eliminarTarea(tarea)
    }
   
    await captureScreenshotByStep(this.page, this.attach)
})

When('el usuario pulsa el botón de eliminar todas las tareas completadas', async function () {
    await this.pom?.homePage.clearCompletedButton.click()
    await captureScreenshotByStep(this.page, this.attach)
});


Then('el número de tareas restantes debe ser {int}', async function (this: ICustomWorld, numExpectedTareas: number) {
    expect(await this.pom?.homePage.getNumberOfTareas()).to.eql(numExpectedTareas)
    await captureScreenshotByStep(this.page, this.attach)
})

Then('las tareas {string} deberian ser eliminadas de la lista', async function (this: ICustomWorld, tareas: string) {
    const arrayTareas = await this.pom?.homePage.getArrayTareas()
    const arrayTareasEsperadas = splitArray(tareas)

    expect(arrayTareas).to.not.include.members(arrayTareasEsperadas)
    await captureScreenshotByStep(this.page, this.attach)
})










