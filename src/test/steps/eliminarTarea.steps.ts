import { Given, When, Then } from '@cucumber/cucumber'
import { ICustomWorld } from '../../support/worlds/world'
import { expect } from 'chai'
import { captureScreenshotByStep, splitArray} from '../../support/helpers/utils/utils'

Given('la tarea está marcada como completada', async function (this: ICustomWorld) {
    await this.pom?.homePage.marcarTarea('Hacer la compra')
    await captureScreenshotByStep(this.page, this.attach)
});

Given('la tarea {string} está marcada como completada', async function (this: ICustomWorld, tarea: string) {
    await this.pom?.homePage.marcarTarea(tarea)
    await captureScreenshotByStep(this.page, this.attach)
})

Given('las tareas {string} están marcadas como completadas', async function (this: ICustomWorld, tareas: string) {
    const arrayTareasEsperadas = splitArray(tareas)

    for(const tarea of arrayTareasEsperadas){
        await this.pom?.homePage.marcarTarea(tarea)
    }

    await captureScreenshotByStep(this.page, this.attach)
})

When('pulsa el botón para eliminar la tarea', async function (this: ICustomWorld) {
    await this.pom?.homePage.eliminarTarea('Hacer la compra')
    await captureScreenshotByStep(this.page, this.attach)
})

When('pulsa el botón para eliminar la tarea: {string}', async function (this: ICustomWorld, tarea: string) {
    await this.pom?.homePage.eliminarTarea(tarea)
    await captureScreenshotByStep(this.page, this.attach)
})

When('pulsa el botón de eliminar todas las tareas completadas', async function () {
    await this.pom?.homePage.clearCompletedButton.click()
    await captureScreenshotByStep(this.page, this.attach)
});

Then('la tarea debería ser eliminada de la lista', async function (this: ICustomWorld) {
    expect(await this.pom?.homePage.getNumberOfTareas()).to.eql(0)
    await captureScreenshotByStep(this.page, this.attach)
})

Then('la tarea {string} deberia ser eliminada de la lista', async function (this: ICustomWorld, tarea: string) {
    const arrayTareas = await this.pom?.homePage.getArrayTareas()

    expect(arrayTareas).not.to.include(tarea)
    await captureScreenshotByStep(this.page, this.attach)
})

Then('el numero de tareas restantes debe ser {int}', async function (this: ICustomWorld, numExpectedTareas: number) {
    expect(await this.pom?.homePage.getNumberOfTareas()).to.eql(numExpectedTareas)
    await captureScreenshotByStep(this.page, this.attach)
})



Then('las tareas {string} deberian ser eliminadas de la lista', async function (this: ICustomWorld, tareas: string) {
    const arrayTareas = await this.pom?.homePage.getArrayTareas()
    const arrayTareasEsperadas = splitArray(tareas)

    expect(arrayTareas).to.not.include.members(arrayTareasEsperadas)
    await captureScreenshotByStep(this.page, this.attach)
})










