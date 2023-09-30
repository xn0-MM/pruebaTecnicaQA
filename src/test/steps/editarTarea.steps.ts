import { When, Then } from '@cucumber/cucumber'
import { ICustomWorld } from '../../support/worlds/world'
import { expect } from 'chai'
import { captureScreenshotByStep} from '../../support/helpers/utils/utils'





When('el usuario hace doble click en la tarea e introduce un nuevo título', async function (this: ICustomWorld) {
  await this.pom?.homePage.editarTarea('Hacer la compra', "Hacer la compra en el Lidl")
  await captureScreenshotByStep(this.page, this.attach)
})

When(/^el usuario hace doble click en la tarea "(.+)" e introduce una nueva tarea "(.+)"$/, async function (this: ICustomWorld, tarea: string, nuevaTarea: string) {
  await this.pom?.homePage.editarTarea(tarea, nuevaTarea)
  await captureScreenshotByStep(this.page, this.attach)
})

Then('la tarea debería mostrarse con el título actualizado', async function (this: ICustomWorld) {
  expect(await this.pom?.homePage.getTituloByPosition(0)).to.equal("Hacer la compra en el Lidl")
  await captureScreenshotByStep(this.page, this.attach)
})

Then(/^la tarea debería mostrarse con el título actualizado: "(.+)"$/, async function (this: ICustomWorld, nuevaTarea: string) {
  expect(await this.pom?.homePage.getArrayTareas()).to.include(nuevaTarea)
  await captureScreenshotByStep(this.page, this.attach)
})
