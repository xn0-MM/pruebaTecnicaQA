import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../../support/worlds/world';
import { expect } from 'chai'
import { captureScreenshotByStep, splitArray} from '../../support/helpers/utils/utils'


Given('el usuario ha seleccionado el filtro {string}', async function (this: ICustomWorld, filtro: string) {
    await this.pom?.homePage.seleccionarFiltro(filtro)
    await captureScreenshotByStep(this.page, this.attach)
})

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



