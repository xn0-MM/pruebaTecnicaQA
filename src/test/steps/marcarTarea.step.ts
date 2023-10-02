import { When, Then } from '@cucumber/cucumber'
import { ICustomWorld } from '../../support/worlds/world'
import { expect } from 'chai'
import { captureScreenshotByStep, splitArray} from '../../support/helpers/utils/utils'

When('el usuario marca como completadas las tareas {string}', async function (this: ICustomWorld, tareas: string) {
   const arrayTareasEsperadas = splitArray(tareas)

   for(const tarea of arrayTareasEsperadas){
      if(tarea !== ""){
         await this.pom?.homePage.marcarTarea(tarea)
      }
   }

   await captureScreenshotByStep(this.page, this.attach)
})

When('hace click en el botón Mark all as completed', async function (this: ICustomWorld) {
   await this.pom?.homePage.markAllCompletedButton.click()
   await captureScreenshotByStep(this.page, this.attach)
});

Then('las tareas {string} deberían estar marcadas como completadas', async function (this: ICustomWorld, tareas: string) {
   const tareasCompletadas: string[] = await this.pom?.homePage.getArrayTareasCompletadas()!
   const arrayTareasCompletadas: string[] = splitArray(tareas)
   
   expect(tareasCompletadas).to.have.members(arrayTareasCompletadas)
   await captureScreenshotByStep(this.page, this.attach)
});

Then('todas las tareas deberían estar marcadas como completadas', async function (this: ICustomWorld) {
   const totalTareas: string[] = await this.pom?.homePage.getArrayTareas()!
   const arrayTareasCompletadas: string[] = await this.pom?.homePage.getArrayTareasCompletadas()!
   
   expect(totalTareas).to.eql(arrayTareasCompletadas)
   await captureScreenshotByStep(this.page, this.attach)
});

Then('el total de tareas marcadas como completadas debería ser {int}', async function (this: ICustomWorld, numExpectTareas: number) {
   expect(await this.pom?.homePage.getNumberOfTareasCompletadas()).to.eql(numExpectTareas)
   await captureScreenshotByStep(this.page, this.attach)
});
