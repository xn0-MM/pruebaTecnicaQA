import { Then } from '@cucumber/cucumber'
import { ICustomWorld } from '../../support/worlds/world'
import { expect } from 'chai'
import { captureScreenshotByStep} from '../../support/helpers/utils/utils'


Then('el contador debería mostrar {int} items left', async function (this: ICustomWorld, numTareasPendientes: number) {
    const number = Number(await this.pom?.homePage.counter.innerText())
    expect(number).to.eql(numTareasPendientes)
    await captureScreenshotByStep(this.page, this.attach)
})