import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../../support/worlds/world';
import { expect } from 'chai'
import { captureScreenshotByStep, splitArray} from '../../support/helpers/utils/utils'

Given('que el usuario se encuentra en la página principial de la aplicación', async function (this: ICustomWorld){
    await this.pom?.homePage.goTo()
})

When('el usuario crea las siguientes tareas {string}', async function (this: ICustomWorld, tareas: string) {
    const listaDeTareas = splitArray(tareas)

    for (const tarea of listaDeTareas) {
        if(tarea !== ""){
            await this.pom?.homePage.crearTarea(tarea)
        }
    }
    await captureScreenshotByStep(this.page, this.attach)
})

Then('debería ver tareas en la lista con los títulos: {string}', async function (this: ICustomWorld, tareas: string){
    const arrayTareasEsperadas= splitArray(tareas).filter(item => item !== "");

    expect(await this.pom?.homePage.getArrayTareas()).to.eql(arrayTareasEsperadas)
    await captureScreenshotByStep(this.page, this.attach)
})

Then('debería ver {int} tareas', async function (this: ICustomWorld, expectedTareas: number){
    expect(await this.pom?.homePage.getNumberOfTareas()).to.eql(expectedTareas)
    await captureScreenshotByStep(this.page, this.attach)
})



