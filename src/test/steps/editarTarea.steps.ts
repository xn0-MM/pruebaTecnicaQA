import { When, Then } from '@cucumber/cucumber'
import { ICustomWorld } from '../../support/worlds/world'
import { expect } from 'chai'
import { captureScreenshotByStep, splitArray} from '../../support/helpers/utils/utils'


When('el usuario hace doble click en la tarea e introduce un nuevo título', async function (this: ICustomWorld) {
  await this.pom?.homePage.editarTarea('Hacer la compra', "Hacer la compra en el Lidl")
  await captureScreenshotByStep(this.page, this.attach)
})

When('el usuario hace doble click en la tarea {string} e introduce una nueva tarea {string}', async function (this: ICustomWorld, tareas: string, nuevasTareas: string) {
  const arrayTareas = splitArray(tareas)
  const arrayNuevasTareas = splitArray(nuevasTareas)

  for(let i = 0; i < arrayTareas.length; i++) {
    if(arrayTareas[i] !== "" ){
      const tareaActual = arrayTareas[i];
      const nuevaTarea = arrayNuevasTareas[i] !== undefined ? arrayNuevasTareas[i] : '';
      await this.pom?.homePage.editarTarea(tareaActual, nuevaTarea);
    }
  }

  await captureScreenshotByStep(this.page, this.attach)
})

Then('debería ver la tarea en la lista con el título: "Hacer la compra en el Lidl"', async function (this: ICustomWorld) {
  expect(await this.pom?.homePage.getTituloByPosition(0)).to.equal("Hacer la compra en el Lidl")
  await captureScreenshotByStep(this.page, this.attach)
})

Then('la tarea debería mostrarse con el título actualizado: {string}', async function (this: ICustomWorld, nuevaTarea: string) {
  const arrayNuevasTareas = splitArray(nuevaTarea)
  
  expect(await this.pom?.homePage.getArrayTareas()).to.include.members(arrayNuevasTareas)
  await captureScreenshotByStep(this.page, this.attach)
})
