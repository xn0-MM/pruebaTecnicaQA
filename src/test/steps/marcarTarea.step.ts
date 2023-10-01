import { Then } from '@cucumber/cucumber'
import { ICustomWorld } from '../../support/worlds/world'
import { expect } from 'chai'
import { captureScreenshotByStep} from '../../support/helpers/utils/utils'

   Then('deberían aparecer las tareas {string} marcadas', async function (this: ICustomWorld, tareas: string) {
      const tareasCompletadas = await this.pom?.homePage.getArrayTareasCompletadas()
      const arrayTareasCompletadas: string[] = tareas.split(",").map(tarea => tarea.trim())
      expect(tareasCompletadas).to.eql(arrayTareasCompletadas)
      await captureScreenshotByStep(this.page, this.attach)
   });



   Then('deberían aparecer {int} tareas marcadas', async function (this: ICustomWorld, numExpectTareas: number) {
      expect(await this.pom?.homePage.getNumberOfTareasCompletadas()).to.eql(numExpectTareas)
      await captureScreenshotByStep(this.page, this.attach)
   });

