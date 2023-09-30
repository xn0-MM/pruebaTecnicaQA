import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../../support/worlds/world';
import { expect } from 'chai'
import { captureScreenshotByStep} from '../../support/helpers/utils/utils'


Given('que el usuario se encuentra en la página principial de la aplicación', async function (this: ICustomWorld){
    await this.pom?.homePage.goTo()
});

When('introduce un título para la tarea en el campo de texto', async function (this: ICustomWorld) {
    await this.pom?.homePage.crearTarea('Hacer la compra')
    await captureScreenshotByStep(this.page, this.attach)
});

When('pulso la tecla enter sin introducir ningún título en el campo de texto', async function (this: ICustomWorld){
    await this.pom?.homePage.textBox.press('Enter')
    await captureScreenshotByStep(this.page, this.attach)
});

When(/^introduce las siguientes tareas "(.+)"$/, async function (this: ICustomWorld, tareas: string) {
    const listaDeTareas = tareas.split(",").map(tarea => tarea.trim())

    for (const tarea of listaDeTareas) {
        await this.pom?.homePage.crearTarea(tarea)
    }
    await captureScreenshotByStep(this.page, this.attach)
});

Then('debería ver una tarea en la lista con el título escrito anteriomente', async function ( this: ICustomWorld ){
    expect(await this.pom?.homePage.getTituloByPosition(0)).to.eql('Hacer la compra')
    await captureScreenshotByStep(this.page, this.attach)
});

Then('el número de tareas debe ser 1', async function ( this: ICustomWorld ){
    expect(await this.pom?.homePage.getNumberOfTareas()).to.eql(1)
    await captureScreenshotByStep(this.page, this.attach)
});

Then('el número de tareas debe ser 0', async function (this: ICustomWorld) {
    expect(await this.pom?.homePage.getNumberOfTareas()).to.eql(0)
    await captureScreenshotByStep(this.page, this.attach)
});

Then(/^debería ver tarjetas con los títulos: "(.+)"$/, async function (this: ICustomWorld, tareas: string){
    const arrayTareasEsperadas= tareas.split(",").map(tareas => tareas.trim())
    expect(await this.pom?.homePage.getArrayTareas()).to.include.members(arrayTareasEsperadas)
    await captureScreenshotByStep(this.page, this.attach)
});

Then(/^debería ver (\d+) tareas$/, async function (this: ICustomWorld, expectedTareas: number){
    expect(await this.pom?.homePage.getNumberOfTareas()).to.eql(expectedTareas)
    await captureScreenshotByStep(this.page, this.attach)
});



